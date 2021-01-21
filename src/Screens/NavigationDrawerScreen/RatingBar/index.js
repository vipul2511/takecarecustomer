import React, {Component} from 'react'
//import react in our code.
import {StyleSheet, View, Text, ActivityIndicator, Slider,TextInput} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {LOGIN_SCREEN} from '../../../constants/route'
// import all basic components
import styles from './StyleRatingBar'
import {Rating, AirbnbRating} from 'react-native-ratings'
import AsyncStorage from '@react-native-community/async-storage'

const WATER_IMAGE = require('../../../assets/star.png')

export default class RatingBarScreen extends Component {
  //Screen3 Component
  constructor (props) {
    super(props)
    this.state = {
      SliderValue: 0,
      minValue: 0,
      maxValue: 100,
    }
  }

  ratingCompleted (rating) {
    console.log('Rating is: ' + rating)
  }

  render () {
    return (
      <View style={styles.MainContainer}>
        
        
        <Rating
          type='custom'
          ratingImage={WATER_IMAGE}
          ratingColor='#b31474'
         
         
          ratingCount={5}
          imageSize={30}
          showRating
          onFinishRating={this.ratingCompleted}
          style={{paddingVertical: 10}}
          
          
        />
      
      <Text style={styles.AdditionalDetailsText}>Comment</Text>

      <View style={styles.TextInputContainer}>
                <View style={styles.input}>
                  <TextInput
                    name='name'
                    placeholder=''
                    style={styles.textInput}
                    keyboardType='default'
                    onChangeText={message=>this.setState({message:message})}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.loginButtonStyle}
                activeOpacity={0.2}
                // onPress={() => {
                //    this.CheckTextInput()
                    
                // }}
                >
                <Text style={styles.buttonWhiteTextStyle}>SUBMIT</Text>
              </TouchableOpacity>
      </View>
    )
  }
}
