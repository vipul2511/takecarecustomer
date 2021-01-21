import React, {Component} from 'react'
import {StyleSheet, View, Text,TouchableOpacity,Image, TextInput,ActivityIndicator} from 'react-native'
import styles from './AdditionalStyle'
import AsyncStorage from '@react-native-community/async-storage'

export default class AdditionalDetails extends Component {
    constructor(props) {
        super(props);
        this.SendRequestCall = this.SendRequestCall.bind(this)
        this.state={
          categoryName:'',
          user_id:'',
          message:'',
        }
      }
      showLoading() {
        this.setState({ loading: true });
      }
    
      hideLoading() {
        this.setState({ loading: false });
      }
      componentDidMount(){
        AsyncStorage.getItem('@userID').then(user_id=>{
          if(user_id){
            this.setState({user_id:user_id})
           // this.VolunteerListCall();
            console.log('userID===',this.state.user_id)
          }
        })
      }
      CheckTextInput = () => {

        if (this.state.message === '') {
    
          alert('Please Enter Message ');
        } 
    
        else {
           this.showLoading();
          this.SendRequestCall();
          
        }
      };
      SendRequestCall() {
        this.showLoading()
        var url = 'http://takecare.atmanirbhartaekpahel.com/api/send_request'
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
              type :"medical",
              message:this.state.message
            }),
        })
          .then(response => response.json())
          .then(responseData => {
             this.hideLoading();
            if (responseData.replyStatus == 'success') {
             
                 alert(responseData.replyMessage)
                //this.setState({ValuntaryList:responseData.data.data})
               
             
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
    console.log("categoryName",JSON.stringify(this.props.navigation.state.params.categoryName))
    // this.setState({categoryName:this.props.navigation.state.params.categoryName})
     console.log('state Catagoty:',this.state.categoryName)
   
    return (
      <View style={styles.Container}>
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
            
          </View>
        </View>
        <Text style={styles.AdditionalDetailsText}>Additional Details</Text>

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
                onPress={() => {
                   this.CheckTextInput()
                    
                }}
                >
                <Text style={styles.buttonWhiteTextStyle}>SEND</Text>
              </TouchableOpacity>
              {this.state.loading && (
              <View style={styles.loading}>
                <ActivityIndicator size="large" color="#b31474" />
              </View>
            )}
      </View>
    )
  }
}
