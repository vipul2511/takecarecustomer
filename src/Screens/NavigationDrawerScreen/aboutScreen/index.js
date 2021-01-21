import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity,Linking } from 'react-native';
import { AboutData } from '../../../constants/route';
// import all basic components
import styles from "./styleAboutScreen";

export default class AboutScreen extends Component {
  //Screen2 Component
  handleClick =()=>{
    this.props.navigation.navigate(AboutData)

    // Linking.canOpenURL('http://takecare.atmanirbhartaekpahel.com/api/page/about-us').then(supported =>{
    //   if (supported) {
    //       Linking.openURL('http://takecare.atmanirbhartaekpahel.com/api/page/about-us');
    //     } else {
    //       console.log("Don't know how to open URI: " + this.props.url);
    //     }
    //   });
    
}
  render() {
    return (
      <View style={styles.MainContainer}>
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