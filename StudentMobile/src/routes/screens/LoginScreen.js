import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends React.Component {
  gotoHomeScreen = event => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.Container}>
        <Image
          source={require('../../../Components/Images/Logo_DHSPKTTP.jpeg')}
        />

        {/* username input field */}
        <View style={styles.Input}>
          <Icon.Button
            name="user"
            color="grey"
            backgroundColor=""
            style={{margin: 10}}
          />
          <TextInput style={styles.TextInput} placeholder="Username" />
        </View>

        {/* password input field */}
        <View style={styles.Input}>
          <Icon.Button
            name="lock"
            color="grey"
            backgroundColor=""
            style={{margin: 10}}
          />
          <TextInput style={styles.TextInput} placeholder="Password" />
        </View>

        {/* Login button field */}
        <View style={styles.LoginBtn}>
          <TouchableOpacity onPress={this.gotoHomeScreen}>
            <Text
              style={{textAlign: 'center', fontSize: 20, paddingVertical: 15}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>Forget password? </Text>
          <TouchableOpacity>
            <Text style={{color: 'lightgreen'}}>Recover here</Text>
          </TouchableOpacity>
        </View>

        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>
            Login with Facebook
          </Text>
        </Icon.Button>

        <Icon.Button name="google" backgroundColor="orangered">
          <Text
            style={{fontFamily: 'Arial', fontSize: 15, paddingHorizontal: 10}}>
            Login with Email
          </Text>
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Input: {
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
  },
  TextInput: {
    textAlign: 'center',
    flex: 2,
    marginRight: 35,
  },
  LoginBtn: {
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: 'lightgreen',
  },
});
