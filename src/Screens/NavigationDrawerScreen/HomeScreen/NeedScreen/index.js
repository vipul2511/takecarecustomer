import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler'
import {ADDITIONAL_DETAILS, LOGIN_SCREEN} from '../../../../constants/route'
import styles from './styleNeedStyle'

export default class NeedScreen extends Component {
  constructor (props) {
    super(props)
    this.state={
      categoryList:[
        {
          categoryName:'Medicines',
          CategoryImage: require('../../../../assets/medicines.png'),
        },
        {
          categoryName:'Food',
          CategoryImage: require('../../../../assets/food.png'),
        },
        {
          categoryName:'Transport',
          CategoryImage: require('../../../../assets/transport.png'),
        },
        {
          categoryName:'Other',
          CategoryImage: require('../../../../assets/other.png'),
        },
      ]
    }
  }
  handleAdditional () {
    this.props.navigation.navigate(ADDITIONAL_DETAILS)
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
          <View style={{flex:1, flexDirection: 'row'}}>
            <Text style={styles.hederTextStyle}>What do you Need?</Text>
          </View>
        </View>
        <FlatList
            style={{flex: 1, width: '100%',marginLeft:30}}
          data={this.state.categoryList}
          keyExtractor={item => item.categoryName}
          renderItem={({item})=>{
            console.log('categoryList', JSON.stringify(item))
            return(
              <View style={styles.OfferContainer}>
          <View style={styles.TittleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(ADDITIONAL_DETAILS,{categoryName:item.categoryName})
              }}>
              <Text style={styles.TitleTextStyle}>{item.categoryName}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
            <Image
              source={item.CategoryImage}
              style={styles.offerImage}
            />
          </View>
        </View>
            )

          }}
        />
        {/* <View style={styles.OfferContainer}>
          <View style={styles.TittleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate(ADDITIONAL_DETAILS)
              }}>
              <Text style={styles.TitleTextStyle}>Medicines</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
            <Image
              source={require('../../../../assets/medicines.png')}
              style={styles.offerImage}
            />
          </View>
        </View> */}

        {/* <View style={styles.OfferContainer}>
          <View style={styles.TittleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleAdditional()
              }}>
              <Text style={styles.TitleTextStyle}>Food</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
            <TouchableOpacity></TouchableOpacity>
            <Image
              source={require('../../../../assets/food.png')}
              style={styles.offerImage}
            />
          </View>
        </View>
        <View style={styles.OfferContainer}>
          <View style={styles.TittleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleAdditional()
              }}>
              <Text style={styles.TitleTextStyle}>Transport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
            <TouchableOpacity></TouchableOpacity>
            <Image
              source={require('../../../../assets/transport.png')}
              style={styles.offerImage}
            />
          </View>
        </View>
        <View style={styles.OfferContainer}>
          <View style={styles.TittleContainer}>
            <TouchableOpacity
              onPress={() => {
                this.handleAdditional()
              }}>
              <Text style={styles.TitleTextStyle}>Other</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.IConContainerStyle}>
            <TouchableOpacity></TouchableOpacity>
            <Image
              source={require('../../../../assets/other.png')}
              style={styles.offerImage}
            />
          </View>
        </View> */}

        <View style={styles.BottomContainer}>
          <View style={styles.callImageContainer}>
            <Image
              source={require('../../../../assets/telephone_call.png')}
              style={styles.callImageStyle}
            />
          </View>
          <View style={styles.callTextContainer}>
            <Text style={styles.CallTextStyle}>Call to Take care</Text>
          </View>
        </View>
      </View>
    )
  }
}
