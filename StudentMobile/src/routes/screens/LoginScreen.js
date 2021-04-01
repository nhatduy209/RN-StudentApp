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
import firebase from 'firebase';
import {LogBox} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      visible: false,
    };
    LogBox.ignoreLogs(['Setting a timer']);
  }
  async gotoHomeScreen() {
    // this.props.navigation.navigate('Home');
    this.setState({visible: true});
    var username = this.state.username;
    var password = this.state.password;
    var canLogin = false;
    await firebase
      .database()
      .ref('StudentAccount/')
      .once('value', function (snapshot) {
        snapshot.forEach(function (child) {
          var myJson = child.toJSON();
          console.log(myJson.Name + ' ' + myJson.Pass);
          if (myJson.Name === username && myJson.Pass === password) {
            canLogin = true;
          }
        });
      });
    if (canLogin === true) {
      this.setState({visible: false});
      this.props.navigation.navigate('Home');
    } else {
      this.setState({visible: false});
      alert('Invalid username or password');
    }
  }

  gotoSignUpScreen = event => {
    this.props.navigation.navigate('SignUp');
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
  render() {
    return (
      <View style={styles.Container}>
        <AnimatedLoader
          visible={this.state.visible}
          overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../components/animation/39655-loader-preloader-animation.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
        <Image
          source={require('../../../components/images/Logo_DHSPKTTP.jpeg')}
        />

        {/* username input field */}
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

        {/* Login button field */}
        <View style={styles.LoginBtn}>
          <TouchableOpacity onPress={this.gotoHomeScreen.bind(this)}>
            <Text
              style={{textAlign: 'center', fontSize: 20, paddingVertical: 15}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <TouchableOpacity>
            <Text style={{fontFamily: 'Arial', fontSize: 15}}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </Icon.Button>

        <Icon.Button name="google" backgroundColor="orangered">
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Arial',
                fontSize: 15,
                paddingHorizontal: 10,
              }}>
              Login with Email
            </Text>
          </TouchableOpacity>
        </Icon.Button>

        <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
          <Text>Don't have account ? </Text>
          <TouchableOpacity onPress={this.gotoSignUpScreen}>
            <Text style={{color: 'lightgreen'}}>Sign up here</Text>
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
  lottie: {
    width: 100,
    height: 100,
  },
});
