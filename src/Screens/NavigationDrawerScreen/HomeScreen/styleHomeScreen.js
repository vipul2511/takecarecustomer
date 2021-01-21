import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor:'#fff'
     
      
    },
    OfferContainer:{
      backgroundColor:'#f0f5f9',
      flexDirection:'row',
      height:150,
      width:'90%',
      marginTop: 10,
     marginVertical:10,
      borderRadius:10
    },
    IConContainerStyle:{
      flex:0.6,
     
      backgroundColor:'#b31474',
      borderTopLeftRadius:60,
      borderBottomLeftRadius:60,
    },
    TitleTextStyle:{
      fontSize:30,
      marginTop:30,
      fontWeight:'bold',
      color:'#b31474',
      justifyContent:'center',
      alignSelf:'center',
    },
    offerImage:{
      marginTop:20,
      marginLeft:50,
      height:100,
      width:100,
      
     
    },
    TitleTextStyle2:{
      fontSize:15,
      marginTop:15,
      color:'#000',
      justifyContent:'center',
      alignSelf:'center',
    },
    TittleContainer:{
      flex:0.6,
      margin:5,
    
     
    },
    CallTextStyle:{
      fontSize:15,
      marginTop:10,
      marginLeft:5,
      alignSelf:'flex-start',
      color:'#fff',
     
    },
    callImageStyle:{
      alignSelf:'flex-end',
      marginTop:10,
      marginRight:5,
    },
    BottomContainer:{
      marginTop:300,
      backgroundColor:'#b31474',
      elevation:2,
      flexDirection:'row',
      height:50,
      width:'90%',
      borderRadius:10,
      borderWidth:1,
      borderColor:'orange'
    },
    callImageContainer:{
    
      flex:0.5,
    },
    callTextContainer:{
     
      flex:0.7,
    }
  });

  export default styles;