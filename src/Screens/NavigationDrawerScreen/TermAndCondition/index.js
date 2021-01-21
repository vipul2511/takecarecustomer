import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { TermAndCondition } from '../../../constants/route';

// import all basic components
import styles from "./styleTermAndCondition";

export default class termsConditions extends Component {
    
    constructor(props){
        super(props)
       
        this.state = {
         url:'https://www.google.com/',
        }
    
      }
     
      handleClick =()=>{
        this.props.navigation.navigate(TermAndCondition)
        //   Linking.canOpenURL('http://takecare.atmanirbhartaekpahel.com/api/page/privacy-policy').then(supported =>{
        //     if (supported) {
        //         Linking.openURL('http://takecare.atmanirbhartaekpahel.com/api/page/privacy-policy');
        //       } else {
        //         console.log("Don't know how to open URI: " + this.props.url);
        //       }
        //     });
          
      }
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        {/* <WebView source={{uri:'http://takecare.atmanirbhartaekpahel.com/api/page/terms-conditions '}}/> */}
         <TouchableOpacity
              style={styles.loginButtonStyle}
              activeOpacity={0.2}
              onPress={this.handleClick}
            >
              <Text style={styles.buttonWhiteTextStyle}>CLICK ME</Text>
            </TouchableOpacity>
      </View>
    );
  }
}