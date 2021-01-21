import React, {Component} from 'react'
//import react in our code.
import {StyleSheet, View, Text, ActivityIndicator, Slider} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {LOGIN_SCREEN} from '../../../constants/route'
// import all basic components
import styles from './StyleLogout'
import AsyncStorage from '@react-native-community/async-storage'

export default class LooutScreen extends Component {
  //Screen3 Component
  constructor (props) {
    super(props)
    this.LogOutCall = this.LogOutCall.bind(this)
    this.state = {
      user_id: '',
     
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('@userID').then(user_id => {
      if (user_id) {
        this.setState({user_id: user_id})
        console.log('userID===', this.state.user_id)
      }
    })
  }
  showLoading () {
    this.setState({loading: true})
  }

  hideLoading () {
    this.setState({loading: false})
  }
  handleLogOut () {
    this.showLoading()
    this.LogOutCall()
    AsyncStorage.removeItem('@user_id').then(succss => {
      this.props.navigation.navigate(LOGIN_SCREEN)
    })
  }
  LogOutCall () {
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/logout'
    console.log('url:' + url)
    fetch(url, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        device_id: '1234',
        device_token: '1111',
        device_type: 'android',
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        device_type: 'android',
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        this.hideLoading()
        if (responseData.replyStatus == 'success') {
          alert(responseData.replyMessage)
        } else if (responseData.replyStatus == 'error') {
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
      <View style={styles.MainContainer}>
        

        
        
        <TouchableOpacity
          style={styles.loginButtonStyle}
          activeOpacity={0.1}
          onPress={() => {
            this.handleLogOut()
          }}>
          <Text style={styles.buttonWhiteTextStyle}>LOG OUT</Text>
        </TouchableOpacity>
        {this.state.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size='large' color='#b31474' />
          </View>
        )}
      </View>
    )
  }
}
