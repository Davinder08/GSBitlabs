import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const Stacks = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar animated={true} barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <NavigationContainer>
          <Stacks.Navigator initialRouteName="FirstScreen">
            <Stacks.Screen name="FirstScreen" component={FirstScreen} />
            <Stacks.Screen name="SecondScreen" component={SecondScreen} />
          </Stacks.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
