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
import {FORGETPASSWORD_SCREEN, LOGIN_SCREEN, SIGNUP_SCREEN} from '../../constants/route'
import styles from './ResetPasswordStyle'
import {ScrollView} from 'react-native-gesture-handler'
import {Formik} from 'formik'
import {ResetPasswordSchema} from '../../Velidations/ResetPasswordValidation'
import AsyncStorage from '@react-native-community/async-storage'

class ResetPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.ResetPasswordCall =this.ResetPasswordCall.bind(this)
    this.state = {
      hidePassword: true,
      C_hidePassword: true,
      password:"",
      ConfirmPassword:'',
      userId: '',
    }
  }
  componentDidMount(){
    AsyncStorage.getItem('@userID').then(userId=>{
      if(userId){
        this.setState({userId:userId})
        console.log('userID===',this.state.userId)
      }
    })
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
   else if(this.state.password != this.state.ConfirmPassword){
     alert('Not Match Password');
   }
  
   else {
    // alert('sussess')
    this.showLoading()
    this.ResetPasswordCall()
     
   }
 };
 handleResetButton(){
  this.props.navigation.navigate(LOGIN_SCREEN)
}
 ResetPasswordCall() {
 
  var url = 'http://takecare.atmanirbhartaekpahel.com/api/reset_password'
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
        user_id : this.state.userId,
        password : this.state.password,
        confirm_password : this.state.ConfirmPassword,
       
       
      }),
  })
    .then(response => response.json())
    .then(responseData => {
       this.hideLoading();
      if (responseData.replyStatus == 'success') {
          alert(responseData.replyMessage)
        this.handleResetButton()  
          

       
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

  manageCPasswordVisibility = () => {
    this.setState({C_hidePassword: !this.state.C_hidePassword})
  }
  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword})
  }
  handleResetPassword (values) {
    alert(JSON.stringify(values))
  }
  handleSinUP () {
    this.props.navigation.navigate(SIGNUP_SCREEN)
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

              <Text style={styles.CartTextStyle2}>Create new Password?</Text>
              <Text style={styles.CartTextStyle}>
                Your new password must be different
              </Text>
              <Text style={styles.CartTextStyle3}>
                from previous used passwords.
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.container3}>
            <View style={styles.PhoneBox}>
             
                      <View style={styles.TextInputContainer}>
                        <View style={styles.input}>
                          <TextInput
                            name='name'
                            placeholder='New Password'
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
                            placeholder='Confirm Password'
                            underlineColorAndroid='transparent'
                            secureTextEntry={this.state.C_hidePassword}
                            style={styles.textInput}
                            keyboardType='default'
                            onChangeText={ConfirmPassword => this.setState({ ConfirmPassword })}
                          />
                          <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.visibilityBtn}
                            onPress={this.manageCPasswordVisibility}>
                            <Image
                              source={
                                this.state.C_hidePassword
                                  ? require('../../assets/hidepasssword_Icon.png')
                                  : require('../../assets/showpassword_icon.png')
                              }
                              style={styles.btnImage}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                     
                      <TouchableOpacity
                        style={styles.loginButtonStyle}
                        activeOpacity={0.2}
                        onPress={() => {
                         this.CheckTextInput()
                       
                      }}>
                        <Text style={styles.buttonWhiteTextStyle}>
                          Reset Password
                        </Text>
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

export default ResetPasswordScreen
