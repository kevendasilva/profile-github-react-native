import { FunctionComponent, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Style } from '../utils/StyleVariables';

type UserIdFormScreenProps = {
  navigation: any
};

export const UserIdFormScreen: FunctionComponent<UserIdFormScreenProps> = ({navigation}) => {
  const [userId, setUserId] = useState("");

  return (
    <View style={styles.inputUserIdContainer}>
      <Text style={styles.labelInput}>
        Insira o ID do usuário que você deseja buscar.
      </Text>
      <TextInput
        placeholder="Digite o ID do usuário"
        onChangeText={(userId) => {
          setUserId(userId);
        }}
        defaultValue={userId}
        style={styles.textInput}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Search", { userId })}
        style={styles.buttonSubmit}
      >
        <Text style={styles.textSubmit}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputUserIdContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  labelInput: {
    fontSize: 18,
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: Style.colors.backgroundOverlay,
    borderRadius: 18,
    borderWidth: 1,
    maxWidth: 360,
    marginBottom: 12,
    padding: 30,
    width: '100%',
  },
  buttonSubmit: {
    alignItems: 'center',
    backgroundColor: Style.colors.primary,
    borderRadius: 18,
    maxWidth: 360,
    paddingVertical: 15,
    width: '100%',
  },
  textSubmit: {
    color: '#FFFFFF',
  }
});
