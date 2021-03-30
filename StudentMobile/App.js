import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/routes/screens/LoginScreen';
import HomeRoute from './src/routes/HomeRoute';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerStyle: {backgroundColor: 'white'}}}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: ''}}
          />
          <Stack.Screen name="Home" component={HomeRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
