import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
   
        backgroundColor:'#fff',

      marginTop: 0,
     
    },
    TextInputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width:'90%',
      height:200,
      
      borderRadius: resp(5),
          marginLeft:resp(20),
      marginVertical: resp(8),
    },
    textInput:{
      fontSize:16,
      width:'100%'
     
    },
    AdditionalDetailsText:{
      marginTop:resp(20),
      marginLeft:resp(20),
      fontSize:resp(15),
      fontWeight:'bold'
  },
    input: {
      paddingVertical: resp(0),
      paddingLeft: resp(20),
      flex: 1,
      height:200,
     
      width:'90%',
      borderRadius: resp(0),
      elevation: resp(1),
    },
    loginButtonStyle: {
      marginTop: 50,
      width: resp(350),
      height: resp(50),
      padding: 10,
      borderRadius:5,
      backgroundColor: '#b31474',
      alignSelf: 'center',
    
    },
    loading: {
      left: 0,
      right: 0,
      top: 20,
      bottom: 0,
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonWhiteTextStyle: {
      textAlign: 'center',
      fontSize: resp(16),
      color: 'white',
      alignContent: 'center',
    },
    textCon: {
      width: '90%',
      marginLeft:resp(20),
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  colorGrey: {
      color: '#000'
  },
  colorYellow: {
      color: '#000'
  }
  });
  export default styles;