import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image,ActivityIndicator} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import styles from './ValuntaryListStyle'
import AsyncStorage from '@react-native-community/async-storage'
import { GET_REQUEST_LIST } from '../../../../constants/route'

export default class ValuntaryList extends Component {
  constructor (props) {
    super(props)
    this.VolunteerListCall = this.VolunteerListCall.bind(this)
    this.state = {
      user_id:'',
      ValuntaryList: '',
      // ValuntaryList: [
      //   {
      //     name: 'harshit',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'rahul',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'vishal',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'ragav',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'himesh',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'gaurav',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'arpana',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      //   {
      //     name: 'vikesh',
      //     image: require('../../../../assets/food.png'),
      //     ratingImage: require('../../../../assets/star.png'),
      //     rating: '1.8',
      //   },
      // ],
    }
  }
  componentDidMount(){
    AsyncStorage.getItem('@userID').then(user_id=>{
      if(user_id){
        this.setState({user_id:user_id})
        this.VolunteerListCall();
        console.log('userID===',this.state.user_id)
      }
    })
  }
  showLoading() {
    this.setState({ loading: true });
  }

  hideLoading() {
    this.setState({ loading: false });
  }
  VolunteerListCall() {
    this.showLoading()
    var url = 'http://takecare.atmanirbhartaekpahel.com/api/volunteer_list'
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
          user_id:this.state.user_id,
         
        }),
    })
      .then(response => response.json())
      .then(responseData => {
         this.hideLoading();
        if (responseData.replyStatus == 'success') {
         
            // alert(responseData.replyMessage)
            this.setState({ValuntaryList:responseData.data.data})
           
         
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
  handleRequestList(){
    this.props.navigation.navigate(GET_REQUEST_LIST)

  }
  render () {
    return (
      <View style={styles.Container}>
        <View style={styles.headerContainer}>
          <View style={{flex: 0.15, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../../../assets/back_arrow_icon.png')}
                style={styles.MenuHomeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.85, flexDirection: 'row'}}>
            <Text style={styles.hederTextStyle}>Valuntary List</Text>
          </View>
        </View>

        <FlatList
          style={{flex: 1, width: '100%'}}
          data={this.state.ValuntaryList}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            console.log('itemdsfg', JSON.stringify(item))
            return (
              <View style={styles.listContainer}>
                <View style={styles.ImageContainer}>
                  <Image style={styles.ImageStyle} source={item.profile_image}></Image>
                </View>
                <View style={styles.DetailsContainer}>
                  <Text style={styles.TextNameStyle}>{item.name}</Text>
                  <View style={styles.row}>
                    <Image
                      style={{marginLeft: 5, marginTop: 2}}
                      source={require('../../../../assets/star.png')}></Image>
                    <Text style={styles.TextRatingStyle}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              
            )
          }}></FlatList>
            <TouchableOpacity
          style={styles.loginButtonStyle}
          activeOpacity={0.1}
          onPress={() => {
            this.handleRequestList()
          }}>
          <Text style={styles.buttonWhiteTextStyle}>Get Request List</Text>
        </TouchableOpacity>
          
      </View>
    )
  }
}
