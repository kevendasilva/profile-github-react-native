import { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { Style } from '../../utils/StyleVariables'

type OptionProps = {
  description: string
  drawLine: boolean
  icon: any
  title: string
}

export const Option: FunctionComponent<OptionProps> = ({ description, drawLine, icon, title, }) => {
  return (
    <View style={[optionStyles.option, drawLine && optionStyles.optionWithBorder]}>
      <View style={styles.icon}>
        <FontAwesome name={icon} size={Style.icon.size} color={Style.icon.color} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
      <View style={styles.openPage}>
        <MaterialIcons name="keyboard-arrow-right" size={36} color="black" />
      </View>
    </View>
  );
}

const optionStyles = StyleSheet.create({
  option: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
  optionWithBorder: {
    borderBottomWidth: Style.border.width,
    borderColor: Style.border.color,
  }
})

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    aspectRatio: 1,
    borderColor: Style.border.color,
    borderRadius: 5,
    borderWidth: Style.border.width,
    flex: 2,
    justifyContent: 'center',
    padding: 3,
  },
  text: {
    flex: 10,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: Style.colors.secondary,
    fontSize: 12,
  },
  openPage: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  }
});
