import { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Style } from '../../utils/StyleVariables'

type OrganizationProps = {
  avatarUrl: string
  description?: string
  index: number
  login: string
  url: string
};

export const Organization: FunctionComponent<OrganizationProps> =
  ({
    avatarUrl,
    description,
    index,
    login,
    url
  }) => {
    return (
      <View key={index} style={styles.orgContainer}>
        <View style={styles.orgImage}>
          <Image style={styles.image} source={{ uri: avatarUrl }} />
        </View>
        <View style={styles.orgData}>
          <Text style={styles.login}>{login}</Text>
          <Text style={styles.url}>{url}</Text>
          {description &&
            <Text style={styles.description}>{description}</Text>
          }
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  orgContainer: {
    alignItems: 'center',
    backgroundColor: Style.colors.backgroundOverlay,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  orgImage: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 36,
    width: 36,
  },
  orgData: {
    flex: 5,
    justifyContent: 'center',
  },
  login: {
    fontSize: 24,
    fontWeight: '700',
  },
  url: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  }
});
