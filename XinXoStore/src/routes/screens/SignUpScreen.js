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
import {
  PushUserData,
  readUserData,
  writeUserData,
} from '../../realtime_database/Read_Write_Delete_Update';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  gotoLoginScreen = event => {
    // this.props.navigation.navigate('Login');
  };
  textChangeHandler(value, type) {
    switch (type) {
      case 'username':
        this.setState({username: value});
        break;

      case 'password':
        this.setState({password: value});
    }
  }

  createAccount() {
    //writeUserData('StudentAccount', this.state.username, this.state.password);
    PushUserData('/StudentAccount', this.state.username, this.state.password);
  }
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.HeaderText}> Sign Up</Text>

        <View style={styles.Input}>
          <Icon.Button
            name="user"
            color="grey"
            backgroundColor=""
            style={{margin: 10}}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            onChangeText={value => this.textChangeHandler(value, 'username')}
          />
        </View>

        {/* password input field */}
        <View style={styles.Input}>
          <Icon.Button
            name="lock"
            color="grey"
            backgroundColor=""
            style={{margin: 10}}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            onChangeText={value => this.textChangeHandler(value, 'password')}
          />
        </View>

        {/* confirm password input field */}
        <View style={styles.Input}>
          <Icon.Button
            name="check"
            color="grey"
            backgroundColor=""
            style={{margin: 10}}
          />
          <TextInput style={styles.TextInput} placeholder="Confirm Password" />
        </View>

        {/* Login button field */}
        <View style={styles.LoginBtn}>
          <TouchableOpacity onPress={this.createAccount.bind(this)}>
            <Text
              style={{textAlign: 'center', fontSize: 20, paddingVertical: 15}}>
              Register account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
  },
  HeaderText: {
    fontStyle: 'italic',
    fontSize: 30,
    marginVertical: 30,
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
