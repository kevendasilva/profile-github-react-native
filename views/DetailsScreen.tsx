import React, { FunctionComponent, useState, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

    if (resource != "bio") urlBase + '/' + resource;

    fetch(urlBase)
      .then(response => response.json())
      .then(json => {
        switch (resource) {
          case 'bio':
            setData({
              sectionTitle: title,
              children: [
                <Text key={1} style={{ fontSize: 18 }}>"{json.bio}"</Text>
              ]
            });
            break;
        }
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
      <View>
        {data.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 30,
  },
  detailsTitle: {
    marginBottom: 24,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  }
});
