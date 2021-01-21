import {Formik} from 'formik'
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
import {LOGIN_SCREEN, OTP_SCREEN} from '../../constants/route'
import {ForgotValidationSchema} from '../../Velidations/ForgotPasswordValidation'
import styles from './forgetStyle'

class ForgetPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.GetOTPCall = this.GetOTPCall.bind(this)
    this.state = {
      hidePassword: true,
      phone:''
    }

  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }

  CheckTextInput = () => {

    if (this.state.phone === '') {

      alert('Please Enter Phone ');
    } 
    
    

    else {
       this.showLoading();
      this.GetOTPCall();
      
    }
  };
  GetOTPCall() {
  
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/forgot_password'
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
          mobileno:this.state.phone
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
         
         
            this.props.navigation.navigate(OTP_SCREEN,{
              mobilenoNumber:responseData.data.mobileno,
              otp:responseData.data.otp
            })
          
          console.log('response success:', responseData)
          console.log('otp:',responseData.data.otp)
          console.log('phone:',responseData.data.mobileno)
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
    this.props.navigation.navigate(LOGIN_SCREEN)
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

              <Text style={styles.CartTextStyle2}> Forgot Password?</Text>
              <Text style={styles.CartTextStyle}>
                Please enter your mobile number to receive
              </Text>
              <Text style={styles.CartTextStyle3}>
                {' '}
                OTP For Password reset{' '}
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.container3}>
            <View style={styles.PhoneBox}>
              
                      <View style={styles.TextInputContainer}>
                        <View style={styles.input}>
                          <TextInput
                            name='phone'
                            placeholder='Enter Mobile No'
                            style={styles.textInput}
                            keyboardType={'numeric'}
                            maxLength={10}
                           onChangeText={phone => this.setState({ phone })}
                           
                            
                          />
                        </View>
                      </View>
                   
                      <TouchableOpacity
                        style={styles.loginButtonStyle}
                        activeOpacity={0.2}
                        onPress={() => {
                   this.CheckTextInput()
                 // this._requestLocation()
                }}>
                        <Text style={styles.buttonWhiteTextStyle}>Get OTP</Text>
                      </TouchableOpacity>
                      {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#b31474" />
              </View>
            )}
            

              <Text style={styles.BottomTextStyle}>
                If you known Your Password?
              </Text>
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => {
                  this.handleLogin()
                }}>
                <Text style={styles.SignButtonStyle}>Login Now</Text>
              </TouchableOpacity>

             
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default ForgetPasswordScreen
