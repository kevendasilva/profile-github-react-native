import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Option } from './Option'
import { Style } from '../../utils/StyleVariables'

type OptionsProps = {
  displayOptions: boolean
  message?: string
  navigation: any
  userId: string
}

export const Options: FunctionComponent<OptionsProps> =
  ({
    displayOptions,
    message,
    navigation,
    userId
  }) => {
    const optionsInfo = [
      {
        icon: 'user-o',
        id: 'bio',
        title: 'Bio',
        description: 'Um pouco sobre o usuário'
      },
      {
        icon: 'building-o',
        id: 'orgs',
        title: 'Orgs',
        description: 'Organizaçõe que o usuário faz parte'
      },
      {
        icon: 'folder-o',
        id: 'repos',
        title: 'Repositórios',
        description: 'Lista contendo todos os repositórios'
      },
      {
        icon: 'users',
        id: 'followers',
        title: 'Seguidores',
        description: 'Lista de seguidores'
      }
    ];

    return (
      <View style={styles.options}>
        {displayOptions ? (
          optionsInfo.map((optionInfo, index) => {
            const lastOption = index == (optionsInfo.length - 1);

            return <Option
              key={index}
              icon={optionInfo.icon}
              id={optionInfo.id}
              title={optionInfo.title}
              description={optionInfo.description}
              drawLine={!lastOption}
              navigation={navigation}
              userId={userId}
            />
          })
        ) : (
          <Text style={styles.optionsText}>
            {message}
          </Text>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  options: {
    alignItems: 'center',
    backgroundColor: Style.colors.backgroundOverlay,
    borderColor: Style.border.color,
    borderRadius: 14,
    borderWidth: Style.border.width,
    flex: 6,
    justifyContent: 'center',
    width: '100%',
  },
  optionsText: {
    margin: 30,
  }
});
