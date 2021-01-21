import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    StyleSheet,
  } from 'react-native'
//   import {DrawerNavigator} from 'react-navigation-drawer';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
  export default Sidebar = props => (
       
      <ScrollView>
         <ImageBackground source={require('../../assets/bg_top.png')} 
         style={{width:undefined,padding:8,paddingTop:48}}>
         <Image source={require('../../assets/default_user_small.png')} style={styles.profileImage}></Image>
         <Text style={styles.name}>harshit</Text>
         <Text style={styles.email}>harshitpanchal06@gmail.com</Text>
         </ImageBackground>
         <View style={styles.container}>
         {/* <TouchableOpacity onPress ={() => {
                   this.props.navigation.navigate("HomeScreen")
                 // this._requestLocation()
                }}>
         <Text style={styles.ScreenName}>Home</Text>
         </TouchableOpacity> */}
         <DrawerNavigatorItems {...props}/>
         </View>
      </ScrollView>
  )
const styles= StyleSheet.create({
    container:{
        flex:1,

    },
    profileImage:{
        width:80,
        height:80,
        borderWidth:1,
        borderRadius:40,
        borderColor:'#fff',
    },
    name:{
        color:"#fff",
        fontSize:15,
       
        fontWeight:"800",
        marginVertical:8,
        marginLeft:10
    },
    ScreenName:{
        color:"#000",
        fontSize:20,
        marginLeft:20,
        marginTop:20,
        fontWeight:'bold'
       
       
    },
    email:{
        color:"#fff",
        fontSize:15,
        marginTop:-5,
        fontWeight:"800",
        marginVertical:8,
        marginLeft:10
    }
})