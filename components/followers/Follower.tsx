import { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Style } from '../../utils/StyleVariables';

type FollowerProps = {
  id: string
  index: number
  htmlUrl: string
  navigation: any
  userImageUrl: string
};

export const Follower: FunctionComponent<FollowerProps> =
  ({
    id,
    index,
    htmlUrl,
    navigation,
    userImageUrl,
  }) => {
    return (
      <View key={index} style={styles.followerContainer}>
        <View style={styles.followerImage}>
          <Image style={styles.image} source={{ uri: userImageUrl }} />
        </View>
        <View style={styles.followerData}>
          <Text style={styles.followerId}>{id}</Text>
          <Text style={styles.htmlUrl}>{htmlUrl}</Text>
        </View>
        <View style={styles.buttonSearchProfile}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search", { userId: id })}
          >
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  followerContainer: {
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
  followerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 48,
    width: 48,
  },
  followerData: {
    flex: 5,
    justifyContent: 'center',
    padding: 12,
  },
  followerId: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
  htmlUrl: {
    fontSize: 14,
    fontWeight: '700',
  },
  buttonSearchProfile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
