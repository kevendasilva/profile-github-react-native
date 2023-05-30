import React, { FunctionComponent, useState, ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Empty } from '../utils/MessageTemplate';
import { Follower } from '../components/followers/Follower';
import { Organization } from '../components/orgs/Organization';
import { Repository } from '../components/repos/Repository';

type DetailsScreenProps = {
  navigation: any
  route: any
};

type dataStruct = {
  sectionTitle: string
  children: ReactNode[]
}

export const DetailsScreen: FunctionComponent<DetailsScreenProps> = ({ navigation, route }) => {
  const initialData: dataStruct = {
    sectionTitle: "",
    children: []
  }

  const [data, setData] = useState(initialData);

  const getDetailsOf = (detailsOf: string, title: string, userId: string) => {
    let resource = detailsOf;

    let urlBase = 'https://api.github.com/users/' + userId;

    if (resource != "bio") urlBase = urlBase + '/' + resource;

    fetch(urlBase)
      .then(response => response.json())
      .then(json => {
        let children: ReactNode[] = [];

        switch (resource) {
          case 'bio':
            children =
              [
                <Text key={1} style={textStyle.default}>
                  {json.bio}
                </Text>
              ];
            break;
          case 'orgs':
            if (json.length == 0) {
              children =
                [
                  <Text key={1} style={textStyle.default}>
                    {Empty('organização', 'a')}
                  </Text>
                ];
            } else {
              children = json.map((org: any, index: number) => (
                <Organization
                  key={'orgs'}
                  index={index}
                  avatarUrl={org.avatar_url}
                  description={org.description}
                  login={org.login}
                  url={org.url}
                />
              ));
            }
            break;
          case 'repos':
            if (json.length == 0) {
              children =
                [
                  <Text key={1} style={textStyle.default}>
                    {Empty("repositório")}
                  </Text>
                ];
            } else {
              children = json.map((repo: any, index: number) => (
                <Repository
                  key={'repos'}
                  index={index}
                  stargazersCount={repo.stargazers_count}
                  watchersCount={repo.watchers_count}
                  name={repo.name}
                  htmlUrl={repo.html_url}
                />
              ));
            }
            break;
          case 'followers':
            if (json.length == 0) {
              children =
                [
                  <Text key={1} style={textStyle.default}>
                    {Empty("seguidor")}
                  </Text>
                ];
            } else {
              children = json.map((follower: any, index: number) => (
                <Follower
                  key={'followers'}
                  index={index}
                  id={follower.login}
                  navigation={navigation}
                  userImageUrl={follower.avatar_url}
                  htmlUrl={follower.html_url}
                />
              ));
            }
            break;
        }

        setData({
          sectionTitle: title,
          children: children
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (typeof route.params != 'undefined') {
    const { detailsOf, title, userId } = route.params;

    getDetailsOf(detailsOf, title, userId);

    route.params = undefined;
  }

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.detailsTitle}>
        <Text style={styles.titleText}>
          {data.sectionTitle}
        </Text>
      </View>
      <ScrollView style={styles.detailsData}>
        {
          data.children
        }
      </ScrollView>
    </View>
  );
};

const textStyle = StyleSheet.create({
  default: {
    backgroundColor: '#FFF',
    fontSize: 18,
    padding: 30,
  }
});

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 30,
  },
  detailsTitle: {
    height: '5%',
    marginBottom: 24,
  },
  titleText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
  detailsData: {
    height: '95%',
  }
});
