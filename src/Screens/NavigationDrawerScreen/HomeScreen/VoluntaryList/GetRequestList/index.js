import React, {Component} from 'react'
//import react in our code.
import {StyleSheet, View, Text, ActivityIndicator,Image,FlatList} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
//import {LOGIN_SCREEN} from '../../../../../constants'
// import all basic components
import styles from './StyleGetRequestList'
import AsyncStorage from '@react-native-community/async-storage'

export default class GetRequestList extends Component {
  //Screen3 Component
  constructor (props) {
    super(props)
    this.GetRequestListCall = this.GetRequestListCall.bind(this)
    this.state = {
      user_id: '',
        GetRequestListData:'',
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('@userID').then(user_id => {
      if (user_id) {
        this.setState({user_id: user_id})
        console.log('userID===', this.state.user_id)
        this.GetRequestListCall();
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
   
    AsyncStorage.removeItem('@user_id').then(succss => {
     // this.props.navigation.navigate(LOGIN_SCREEN)
    })
  }
  GetRequestListCall () {
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/get_request_list'
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
            this.setState({GetRequestListData:responseData.data.data})
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
        
        <View style={styles.headerContainer}>
          <View style={{flex: 0.15, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../../../../assets/back_arrow_icon.png')}
                style={styles.MenuHomeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.85, flexDirection: 'row'}}>
            <Text style={styles.hederTextStyle}>Get Request List</Text>
          </View>
        </View>
        
        <FlatList
         style={{flex: 1, width: '100%'}}
          data={this.state.GetRequestListData}
          keyExtractor={item => item.message}
          renderItem={({item})=>{
            console.log('requestData:', JSON.stringify(item))
            return(
                <View style={styles.listContainer}>
                {/* <View style={styles.ImageContainer}>
                  <Image style={styles.ImageStyle} source={item.profile_image}></Image>
                </View> */}
                <View style={styles.DetailsContainer}>
                  <Text style={styles.TextNameStyle}>{item.type}</Text>
                  <View style={styles.row}>
                   
                    <Text style={styles.TextRatingStyle}>{item.message}</Text>
                  </View>
                </View>
              </View>
              
            )
          }}>

        </FlatList> 
       
        {this.state.loading && (
          <View style={styles.loading}>
            <ActivityIndicator size='large' color='#b31474' />
          </View>
        )}
      </View>
    )
  }
}
