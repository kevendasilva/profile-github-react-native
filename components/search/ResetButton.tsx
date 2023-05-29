import { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Style } from '../../utils/StyleVariables'

type ResetButtonProps = {
  callback: Function
};

export const ResetButton: FunctionComponent<ResetButtonProps> = ({ callback }) => {
  return (
    <TouchableOpacity
      style={styles.buttonReset}
      onPress={() => callback()}
    >
      <Entypo style={styles.icon} name="log-out" size={18} />
      <Text style={styles.text}>Resetar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonReset: {
    alignItems: 'center',
    borderColor: Style.colors.primary,
    borderRadius: 24,
    borderWidth: Style.border.width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  icon: {
    color: Style.colors.primary,
    marginRight: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  }
});
