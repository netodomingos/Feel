import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Routes
import Home from './Pages/Home/Home'
import Anxiety from './Pages/Anxiety/Anxiety'

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ 
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='anxiety' component={Anxiety} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
