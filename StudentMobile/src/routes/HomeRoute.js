import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
const Drawer = createDrawerNavigator();

export default class HomeRoute extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    );
  }
}
