import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import {FORGETPASSWORD_SCREEN, RESET_PASSWORD_SCREEN, SIGNUP_SCREEN} from '../../constants/route'
import styles from './OTPStyle'
import OTPTextView from 'react-native-otp-textinput';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { OTPValidationSchema } from '../../Velidations/OTPValidation';

var mobileNumber, otp

class OTPScreen extends Component {
  constructor (props) {
    super(props)
    this.ResendOTPCall = this.ResendOTPCall.bind(this)
    this.MatchOTP =this.MatchOTP.bind(this)
    this.state = {
       hidePassword: true,
       OTP:''
      }

  }
  componentDidMount(){
    const { navigation } = this.props
    mobileNumber = navigation.getParam('mobilenoNumber', 'no-mobile')
    otp = navigation.getParam('otp', 'no-otp')

    this.setState({ OTP: otp })
    this.setState ({mobilenoNumber:mobileNumber})
    console.log('mobileNumber ==',mobileNumber)
    console.log('otp ==',otp)

  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  managePasswordVisibility = () =>
  {
    this.setState({ hidePassword: !this.state.hidePassword });
  }
  handleResetPassword(){
      this.props.navigation.navigate(RESET_PASSWORD_SCREEN)
  }
  CheckTextInput = () => {

    if (this.state.otpInput === '') {

      alert('Please Enter OTP ');
    } 
    else if (this.state.otpInput != this.state.OTP) {
      alert('Please Valid OTP');
    }
    

    else {
     
       this.showLoading();
      this.MatchOTP();
      
    }
  };
  MatchOTP() {
  
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/match_otp'
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
          mobileno:mobileNumber,
          otp:this.state.OTP
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
         
            this.handleResetPassword()
            // this.props.navigation.navigate(OTP_SCREEN,{
            //   mobilenoNumber:responseData.data.mobileno,
            //   otp:responseData.data.otp
            // })
          
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
  ResendOTPCall() {
  
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
          mobileno:mobileNumber
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
         
          this.setState({OTP:responseData.data.otp});
            // this.props.navigation.navigate(OTP_SCREEN,{
            //   mobilenoNumber:responseData.data.mobileno,
            //   otp:responseData.data.otp
            // })
          
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
 
  render () {
    return (
      <View style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
        {/* <View style={styles.logoContainer}> */}
          <ImageBackground source={require('../../assets/bg_top.png')} style={styles.styleImageTOP}>
         
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.BackButtonContainer}>
              <Image
                source={require('../../assets/back_arrow_icon.png')}
                style={styles.backButtonStyle}
              />
            </TouchableOpacity>
         
          <Text style={styles.CartTextStyle2}> OTP Verification</Text>
          <Text style={styles.CartTextStyle}>please Enter 6-digit otp which your recived </Text>
          <Text style={styles.CartTextStyle3}>{mobileNumber}</Text>
          {/* <Text style={styles.CartTextStyle3}>{otp}</Text> */}
          </ImageBackground>
         
        {/* </View> */}

        {/* <View style={styles.container3}> */}
        <Text style={styles.EnterOTPStyle}>{this.state.OTP}</Text>
          {/* <View style={styles.PhoneBox}> */}
        

                <OTPTextView
                    //handleTextChange={otp => this.setState({ otpInput: otp })}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={6}
                    color={'#000'}
                    tintColor='#BBBCBE'
                    offTintColor='#BBBCBE'
                    inputCellLength={1}
                    handleTextChange={otp => this.setState({ otpInput:otp })}
                   
                  />
                  <View style={styles.horizontal}>
                  <TouchableOpacity
                  
                   onPress={() => {
                     this.props.navigation.goBack()
                 // this._requestLocation()
                }}>
                  <Text style={styles.changeTextStyle} >Change mobile Number</Text>
                  </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  this.showLoading()
                  this.ResendOTPCall()
                }}>
                <Text style={styles.ResendOTPStyle} >Resend OTP?</Text>
                </TouchableOpacity> 
                </View>
                 
            <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
                   this.CheckTextInput()
                 // this._requestLocation()
                }}>
              <Text style={styles.buttonWhiteTextStyle}>Verify</Text>
            </TouchableOpacity>
          
            {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#b31474" />
              </View>
            )}
  {/* </View> */}
            
            
            
        
        {/* </View> */}
        </ScrollView>
      </View>
    )
  }
}

export default OTPScreen
