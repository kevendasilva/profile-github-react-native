import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen } from './views/DetailsScreen';
import { UserIdFormScreen } from './views/UserIdFormScreen';
import { SearchScreen } from './views/SearchScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="InputUserId"
          component={UserIdFormScreen}
          options={{
            title: "Pesquisar usuário"
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Detalhes"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
