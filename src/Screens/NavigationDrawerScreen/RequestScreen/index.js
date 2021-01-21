import React, {Component} from 'react'
//import react in our code.
import {StyleSheet, View, Text, Image} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
// import all basic components
import styles from './StyleRequest'

export default class RequestScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ongoingBookingList: [
        {
          name: 'harshit',
          image: require('../../../assets/offer.png'),
          text: 'panchal',
        },
        {
          name: 'rahul',
          image: require('../../../assets/food.png'),
          text: 'panchal',
        },
        {
          name: 'dfg',
          image: require('../../../assets/food.png'),
          text: 'panchal',
        },
        {
          name: 'fdgh',
          image: require('../../../assets/food.png'),
          text: 'panchal',
        },
        {
            name: 'dfdfghjg',
            image: require('../../../assets/food.png'),
            text: 'panchal',
          },
          {
            name: 'fddfggh',
            image: require('../../../assets/food.png'),
            text: 'panchal',
          },
      ],
      pastBookingList: [
        {
          name: 'harshit',
          image: require('../../../assets/food.png'),
          text: 'panchal',
        },
        {
          name: 'rahul',
          image: require('../../../assets/food.png'),
          text: 'panchal',
        },
      ],
    }
  }
  //Screen2 Component
  render () {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.OngoingText}> Ongoing Booking </Text>
        <FlatList
           horizontal
           pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
         legacyImplementation={false}
          style={{flex:1,backgroundColor:'white'}}
          data={this.state.ongoingBookingList}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            console.log('itemdsfg', JSON.stringify(item))
            return (
              <View style={styles.OngoingContainer}>
                <Image source={item.image} style={styles.OngoingImages} />
                <Text style={{marginLeft: 20}}>{item.name}</Text>
                <Text style={{marginLeft: 20}}>{item.text}</Text>
              </View>
            )
          }}></FlatList>
          <Text style={styles.PastText}> Past Booking </Text>
        <FlatList 
        style={{flex:1,backgroundColor:'white'}}
        data={this.state.pastBookingList}
            keyExtractor={item => item.name}
          renderItem={({item}) => {
            console.log('itemdsfg', JSON.stringify(item))
            return (
              <View style={styles.PastContainer}>
                <Image source={item.image} style={styles.OngoingImages} />
                <Text style={{marginLeft: 20}}>{item.name}</Text>
                <Text style={{marginLeft: 20}}>{item.text}</Text>
              </View>
            )
          }}>
        </FlatList>
        {/* <Text style={styles.PastText}> Past Booking </Text> */}
        {/* <View style={styles.PastContainer}>
          <Image
            source={require('../../../assets/other.png')}
            style={styles.OngoingImages}
          />
        </View>
        <Text style={{marginLeft: 20}}>harshit</Text>
        <Text style={{marginLeft: 20}}>harshit</Text> */}
      </View>
    )
  }
}
