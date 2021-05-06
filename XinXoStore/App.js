import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/routes/screens/LoginScreen';
import HomeRoute from './src/routes/HomeRoute';
import firebase from 'firebase';
import {
  readUserData,
  writeUserData,
} from './src/realtime_database/Read_Write_Delete_Update';
import SignUpScreen from './src/routes/screens/SignUpScreen';

const Stack = createStackNavigator();
// config database
var config = {
  databaseURL: 'https://studentmobile-2c327-default-rtdb.firebaseio.com',
  projectId: 'studentmobile-2c327',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
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
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: 'Đăng ký'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
