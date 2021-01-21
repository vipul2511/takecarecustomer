import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity, Linking ,ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import all basic components
import styles from "./stylePrivacyData";
import {WebView} from 'react-native-webview'


export default class privacyData extends Component {
    constructor(props){
        super(props)
        this.privacyApiCall = this.privacyApiCall.bind(this)

        this.state={
            title:'',
            description:''
            
        }
    }
    showLoading() {
        this.setState({ loading: true });
      }
    
      hideLoading() {
        this.setState({ loading: false });
      }
    componentDidMount(){
        this.privacyApiCall()
    }
    privacyApiCall() {
        this.showLoading()
        var url = 'http://takecare.atmanirbhartaekpahel.com/api/page/privacy-policy '
        console.log('url:' + url)
        fetch(url, {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json',
            device_id: '1234',
            device_token: '1111',
            device_type: 'android',
          },
          // body: JSON.stringify(
          //   {
          //     user_id:this.state.user_id,
          //     type :"medical",
          //     message:this.state.message
          //   }),
        })
          .then(response => response.json())
          .then(responseData => {
             this.hideLoading();
            if (responseData.replyStatus == 'success') {
             
                // alert(responseData.data.description)
                this.setState({title:responseData.data.title})
                this.setState({description:responseData.data.description})
               
             
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
    render(){
        var discription = this.state.description;
        return(
            <WebView
            style={{
              flex: 1,
              
              backgroundColor: 'white',
            }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{html: discription}}
          />
        //     <View style={styles.MainContainer}>
        //         <Text>{this.state.title}</Text>
        //         <ScrollView>
        //         <Text>{this.state.description}</Text>
        //         </ScrollView>
               
        //         {this.state.loading && (
        //       <View style={styles.loading}>
        //         <ActivityIndicator size="large" color="#b31474" />
        //       </View>
        //     )}
        //   </View>
        )
    }
}