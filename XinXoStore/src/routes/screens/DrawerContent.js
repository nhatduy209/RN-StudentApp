import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* header */}
        <View>
          <Text style={{fontSize: 20}}>Hello User</Text>
        </View>
      </View>
    );
  }
}
