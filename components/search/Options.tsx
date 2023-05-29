import { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Option } from './Option'
import { Style } from '../../utils/StyleVariables'

type OptionsProps = {
  displayOptions: boolean
  message?: string
}

export const Options: FunctionComponent<OptionsProps> = ({ displayOptions, message }) => {
  const optionsInfo = [
    {
      icon: 'user-o',
      title: 'Bio',
      description: 'Um pouco sobre o usuário'
    },
    {
      icon: 'building-o',
      title: 'Orgs',
      description: 'Organizaçõe que o usuário faz parte'
    },
    {
      icon: 'folder-o',
      title: 'Repositórios',
      description: 'Lista contendo todos os repositórios'
    },
    {
      icon: 'users',
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
            title={optionInfo.title}
            description={optionInfo.description}
            drawLine={!lastOption}
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
