import { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Style } from '../../utils/StyleVariables'

type AboutUserProps = {
  userId?: string
  userImageUrl?: string
  userName?: string
  navigation: any
};

export const AboutUser: FunctionComponent<AboutUserProps> =
  ({
    userId,
    userImageUrl,
    userName,
    navigation
  }) => {
    return (
      <View style={styles.searchProfile}>
        <View style={styles.userImageContainer}>
          {userImageUrl &&
            <Image style={styles.userImage} source={{ uri: userImageUrl }} />
          }
          <TouchableOpacity
            style={styles.iconSearch}
            onPress={() => {
              navigation.navigate("InputUserId");
            }}
          >
            <FontAwesome name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          {userName &&
            (<Text style={styles.userName}>{userName}</Text>)
          }
        </View>
        <View>
          {userId &&
            <Text style={styles.userId}>@{userId}</Text>
          }
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  searchProfile: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
  },
  userImageContainer: {
    aspectRatio: 1,
    backgroundColor: Style.colors.backgroundOverlay,
    borderRadius: 64,
    minHeight: 100,
    height: '60%',
    maxHeight: 180,
    marginBottom: 12,
    position: 'relative'
  },
  userImage: {
    aspectRatio: 1,
    borderRadius: 64,
  },
  iconSearch: {
    backgroundColor: Style.colors.primary,
    borderRadius: 18,
    bottom: 0,
    padding: 15,
    position: 'absolute',
    right: 0,
    width: 'auto',
  },
  userName: {
    fontWeight: '800',
    fontSize: 19,
  },
  userId: {
    color: Style.colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
});
