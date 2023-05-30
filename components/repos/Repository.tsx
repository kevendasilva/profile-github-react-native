import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Style } from '../../utils/StyleVariables';

type RepositoryProps = {
  htmlUrl: string
  index: number
  name: string
  stargazersCount: number
  watchersCount: number
};

export const Repository: FunctionComponent<RepositoryProps> =
  ({
    htmlUrl,
    index,
    name,
    stargazersCount,
    watchersCount
  }) => {
    return (
      <View key={index} style={styles.repoContainer}>
        <View style={styles.repoData}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.htmlUrl}>{htmlUrl}</Text>
          <View style={styles.stats}>
            <FontAwesome style={styles.icon} name="star-o" size={14} color="black" />
            <Text style={styles.stargazersCount}>
              {stargazersCount}
            </Text>
            <FontAwesome style={styles.icon} name="eye" size={14} color="black" />
            <Text style={styles.watchersCount}>
              {watchersCount}
            </Text>
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  repoContainer: {
    backgroundColor: Style.colors.backgroundOverlay,
    marginBottom: 12,
  },
  repoData: {
    padding: 18
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  htmlUrl: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  stats: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  stargazersCount: {
    fontSize: 12,
    marginRight: 6,
  },
  watchersCount: {
    fontSize: 12,
  },
  icon: {
    marginRight: 3,
  }
});
