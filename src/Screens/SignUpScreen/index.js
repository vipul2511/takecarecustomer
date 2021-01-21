import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {FORGETPASSWORD_SCREEN, NavigationDrawer, PHONE_VERIFICATION, SIGNUP_SCREEN} from '../../constants/route'
import styles from './SignupStyle'
import Geolocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding';
import GetLocation from 'react-native-get-location';


class SignUPScreen extends Component {
  constructor (props) {
    super(props)
    this.SignUPCall = this.SignUPCall.bind(this)
    this.state = {
      hidePassword: true,
      name :'',
      email:'',
      phone:'',
      password:'',
      location :'',
      address: '',
      loading: false,
      
    }
  }
 
  componentDidMount(){
    this.requestLocation()
  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
    requestLocation () {
    
      this.setState({ loading: true, address: '' });
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 150000,
    })
        .then(address => {
            this.setState({
                address,
                loading: false,
            });
            console.log('latitude=',this.state.address.latitude)
            console.log('longitude=',this.state.address.longitude)
        })
      
    }
  
  CheckTextInput = () => {

    if (this.state.name === '') {

      alert('Please Enter Name ');
    } else if (this.state.email == ' ' || this.validate(this.state.email)) {
      alert('Please Enter Email');
    }
    else if (this.state.password === '') {
      alert('Please Enter Password');
    }
    else if(this.state.phone === ''){
      alert('Please Enter Phone');
    }
    else if(this.state.location === ''){
      alert('Please Enter Location');
    }

    else {
       this.showLoading();
      this.SignUPCall();
      
    }
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      alert('Please Enter validate Email');
      //console.log("Email is Not Correct");
      this.setState({ email: text })
      return false;
    }
    else {
      this.setState({ email: text })
      console.log("Email is Correct");
    }
  }
 
  SignUPCall() {
  
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/signup'
    console.log('url:' + url)
    fetch(url, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
      },
      body: JSON.stringify(
        {
          mode: 1,
          device_token: '1234',
          device_type: 'android',
          name: this.state.name, 
          email: this.state.email,
          password: this.state.password,
          mobileno:this.state.phone,
          address:this.state.location,
          latitude:this.state.address.latitude,
          longitude:this.state.address.longitude,
          city:'',
          state:'',
          country:''
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
            
          this.props.navigation.navigate(PHONE_VERIFICATION,{
            mobileNumber:responseData.data.mobileno,
            verificationCode:responseData.data.verification_code})
        } 
        else if(responseData.replyStatus == 'error') {
           this.hideLoading()
           alert(responseData.replyMessage)
          console.log('response object:', responseData)
        }
        
        
      })
      .catch(error => {
         this.hideLoading()
        console.error(error)
        alert(error)
      })
      .done()
  }
  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword})
  }
  handleLogin () {
    this.props.navigation.navigate(FORGETPASSWORD_SCREEN)
  }
  handleSinUP () {
    this.props.navigation.navigate(PHONE_VERIFICATION)
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <ImageBackground
              source={require('../../assets/bg_top.png')}
              style={styles.styleImageTOP}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.BackButtonContainer}>
                <Image
                  source={require('../../assets/back_arrow_icon.png')}
                  style={styles.backButtonStyle}
                />
              </TouchableOpacity>

              <Text style={styles.CartTextStyle2}> Sign UP</Text>
              <Text style={styles.CartTextStyle}>
                Please enter your Details{' '}
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.container3}>
            <View style={styles.PhoneBox}>
              <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder='Name'
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={name => this.setState({ name })}
                  />
                </View>
              </View>

              <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder='Email'
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={email => this.setState({ email })}
                  />
                </View>
              </View>
              <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder='Phone'
                    style={styles.textInput}
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={phone => this.setState({ phone })}
                  />
                </View>
              </View>
              <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder='Password'
                    underlineColorAndroid='transparent'
                    secureTextEntry={this.state.hidePassword}
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={password => this.setState({ password })}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={this.managePasswordVisibility}>
                    <Image
                      source={
                        this.state.hidePassword
                          ? require('../../assets/hidepasssword_Icon.png')
                          : require('../../assets/showpassword_icon.png')
                      }
                      style={styles.btnImage}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder='Location'
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={location => this.setState({ location })}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.loginButtonStyle}
                activeOpacity={0.2}
                onPress={() => {
                   this.CheckTextInput()
                    //this.handleSinUP()
                }}>
                <Text style={styles.buttonWhiteTextStyle}>Sing UP</Text>
              </TouchableOpacity>
              {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#b31474" />
              </View>
            )}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default SignUPScreen
