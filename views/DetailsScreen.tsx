import React, { FunctionComponent, useState, ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Empty } from '../utils/MessageTemplate'
import { Organization } from '../components/orgs/Organization'

type DetailsScreenProps = {
  route: any
};

type dataStruct = {
  sectionTitle: string
  children: ReactNode[]
}

export const DetailsScreen: FunctionComponent<DetailsScreenProps> = ({ route }) => {
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
                  {Empty("repositório")}
                </Text>
              ];
            } else {
              children = json.map((org: any, index: number) => (
                <Organization
                  index={index}
                  avatarUrl={org.avatar_url}
                  description={org.description}
                  login={org.login}
                  url={org.url}
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
