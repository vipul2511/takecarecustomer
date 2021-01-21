import React, { Component } from 'react';
//import react in our code.
import {  View, Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LOGIN_SCREEN, NEED_SCREEN, VOLUNTARY_LIST } from '../../../constants/route';
import style from '../../LoginScreen/LoginStyle';
// import all basic components
import styles from './styleHomeScreen'

export default class HomeScreen extends Component {
  //Screen1 Component
  constructor(props) {
    super(props);
    
   
  }
  handleOffer(){
    
    this.props.navigation.navigate(VOLUNTARY_LIST)
    
  }
  handleNeed(){
  
    this.props.navigation.navigate(NEED_SCREEN)
  }
  render() {
    return (

      <View style={styles.Container}>
        <View style={{ flexDirection: 'row' }}>
             {/* <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          
          <Image
            source={require('../../../assets/food.png')}
            style={{ alignSelf:'flex-start' ,backgroundColor:'red'}}
          />
        </TouchableOpacity> */}
      </View>
        <View style={styles.OfferContainer}>
        <View style={styles.TittleContainer}>
        <TouchableOpacity  onPress={() => {
                  this.handleOffer()
                }}>
            <Text style={styles.TitleTextStyle}>I OFFER</Text>
            <Text style={styles.TitleTextStyle2}>Voluntary list</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
          <Image
            source={require('../../../assets/offer.png')}
            style={styles.offerImage}
          />
          </View>
         
        </View>

        <View style={styles.OfferContainer}>
        <View style={styles.TittleContainer}>
          <TouchableOpacity  onPress={() => {
                  this.handleNeed()
                }}>
          <Text style={styles.TitleTextStyle}>I NEED</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
          <TouchableOpacity  >

          </TouchableOpacity>
          <Image
            source={require('../../../assets/need.png')}
            style={styles.offerImage}
          />
          </View>
         
        </View>

        <View style={styles.BottomContainer}>
                <View style={styles.callImageContainer}>
        <Image
            source={require('../../../assets/telephone_call.png')}
                style={styles.callImageStyle}
          />
          </View>
          <View style={styles.callTextContainer}>
        <Text style={styles.CallTextStyle}>Call to Take care</Text>
        </View>
        </View>
        
      </View>
    );
  }
}