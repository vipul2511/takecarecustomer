import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {FORGETPASSWORD_SCREEN, LOGIN_SCREEN, MAIN_STACK, NavigationDrawer, SIGNUP_SCREEN} from '../../constants/route'
import { loginValidationSchema } from '../../Velidations/LoginValidation';
import styles from './LoginStyle'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.LoginCall =this.LoginCall.bind(this)
    this.state = {
      hidePassword: true,
      phone:'',
      password:'',
      UserID:''
     }

  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  CheckTextInput = () => {

   
     if (this.state.password === '') {
      alert('Please Enter Password');
    }
    else if(this.state.phone === ''){
      alert('Please Enter Phone');
    }
   
    else {
       this.showLoading();
      this.LoginCall();
      
    }
  };
  LoginCall() {
  
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/login'
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
          mobileno:this.state.phone,
          password: this.state.password,
         
         
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
             AsyncStorage.setItem('@userID',JSON.stringify(responseData.data.id))
            console.log('user id==',responseData.data.id)
              // this.setState({UserID:responseData.data.id})
              // console.log('user id==',this.state.UserID)


          this.handleLogin()
        } 
        else if(responseData.replyStatus =='error') {
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
 
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  handleLogin(){
    //alert(JSON.stringify(values))
    this.props.navigation.navigate(NavigationDrawer)

  }
  handleForgetPassword () {
    this.props.navigation.navigate(FORGETPASSWORD_SCREEN)
  }
  handleSinUP(){
    this.props.navigation.navigate(SIGNUP_SCREEN)
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.logoContainer}>
          <ImageBackground source={require('../../assets/bg_top.png')} style={styles.styleImageTOP}>
          <Image source={require('../../assets/logo.png')} style={styles.logoStyle}></Image>
          <Text style={styles.CartTextStyle}>Please enter your registerred</Text>
          <Text style={styles.CartTextStyle2}> mobile number</Text>
          </ImageBackground>
         
        </View>

        <View style={styles.container3}>
          <View style={styles.PhoneBox}>
           
             
                   <View style={styles.TextInputContainer}>

                    <View style={styles.input}>
                      <TextInput
                        name="phone"
                        placeholder="Phone Number"
                        style={styles.textInput}
                       
                        onChangeText={phone => this.setState({ phone })}
                        keyboardType="numeric"
                        maxLength={10}
                      />
                    </View>
                  </View>
                 
                  <View style={styles.TextInputContainer}>
                    <View style={styles.input}>
                      <TextInput
                        name="name"
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={this.state.hidePassword}
                        style={styles.textInput}
                        onChangeText={password => this.setState({ password })}
                       
                        keyboardType="default"
                      />
                      <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
          <Image source = { ( this.state.hidePassword ) ? require('../../assets/hidepasssword_Icon.png') : require('../../assets/showpassword_icon.png') } style = { styles.btnImage } />
        </TouchableOpacity>
                    </View>
                  </View>
                  
                  <TouchableOpacity onPress={() => {this.handleForgetPassword()}}>
                  <Text style={styles.forgetButtonStyle}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
                this.CheckTextInput()
                 // this._requestLocation()
                }}>
              <Text style={styles.buttonWhiteTextStyle}>Login</Text>
            </TouchableOpacity>
               
            {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#b31474" />
              </View>
            )}
         
          

               
              
            
            <Text style={styles.BottomTextStyle}>don't have an account?</Text>
            <TouchableOpacity  activeOpacity={0.2}
              onPress={() => {
                this.handleSinUP()
              }}>
            <Text style={styles.SignButtonStyle}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default LoginScreen
