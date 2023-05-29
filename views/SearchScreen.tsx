import { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Options } from '../components/search/Options';
import { ResetButton } from '../components/search/ResetButton'
import { AboutUser } from '../components/search/AboutUser'
import { Style } from '../utils/StyleVariables'

type SearchScreenProps = {
  navigation: any
  route: any
}

export function SearchScreen({ navigation, route }: SearchScreenProps) {
  const [userData, setUserData] = useState({
    id: "",
    imageUrl: "",
    name: "",
    bio: ""
  });

  let messageStatus = "";

  const isUserDataEmpty = userData.id === "" || userData.id === "-1";

  const errorWhileLoadingUserData = userData.id === "-1";

  const getUserData = (userId: string) => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response =>
        response.json().then(json => (
          ({ status: response.status, data: json })
        ))
          .then(obj => {
            if (obj.status == 404) {
              setUserData({
                id: "-1",
                imageUrl: "",
                name: "",
                bio: ""
              })
              return;
            }

            setUserData({
              id: obj.data.login,
              imageUrl: obj.data.avatar_url,
              name: obj.data.name,
              bio: obj.data.bio
            });
          }));
  }

  const clearUserData = () => {
    setUserData({
      id: "",
      imageUrl: "",
      name: "",
      bio: ""
    });
  }

  if (typeof route.params != 'undefined') {
    let { userId } = route.params;

    if (userId) {
      getUserData(userId);
    }

    route.params = undefined;
  }

  if (isUserDataEmpty) {
    messageStatus = "Nada de novo por aqui... Pesquise um usuário pelo seu id, usando o botão acima.";
  }

  if (errorWhileLoadingUserData) {
    messageStatus = "Usuário não encontrado. Tente novamente."
  }

  return (
    <View style={styles.searchScreen}>
      <View style={styles.searchResult}>
        {
          !isUserDataEmpty ? (
            <AboutUser
              userId={userData.id}
              userImageUrl={userData.imageUrl}
              userName={userData.name}
              navigation={navigation}
            />
          ) : (
            <AboutUser
              navigation={navigation}
            />
          )
        }
        {
          !isUserDataEmpty ? (
            <Options displayOptions={true} />
          ) : (
            <Options
              displayOptions={false}
              message={messageStatus}
            />
          )
        }
      </View>

      {
        !isUserDataEmpty &&
        <View style={styles.resetContainer}>
          <ResetButton callback={clearUserData} />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    alignItems: 'center',
    backgroundColor: Style.colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  searchResult: {
    flex: 9,
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  resetContainer: {
    backgroundColor: Style.colors.backgroundOverlay,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    maxWidth: 480,
    padding: 30,
    width: '100%',
  },
});
