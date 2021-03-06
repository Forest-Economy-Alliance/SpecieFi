import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailsScreen} from './screens/DetailsScreen';
import {HomeScreen} from './screens/HomeScreen';
import {GameScreen} from './screens/GameScreen';
import {ResultsScreen} from './screens/ResultsScreen';
import {SubmissionsScreen} from './screens/SubmissionsScreen';
import {DashboardScreen} from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            headerStyle: {backgroundColor: '#f7f7f7'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: '#f7f7f7'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Submissions"
          component={SubmissionsScreen}
          options={{
            title: 'Submissions',
            headerStyle: {backgroundColor: '#f7f7f7'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{
            title: 'Game',
            headerStyle: {backgroundColor: '#f7f7f7'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
