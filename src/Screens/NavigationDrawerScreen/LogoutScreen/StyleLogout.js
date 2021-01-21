import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
    alignItems:'center',
        justifyContent:'center',
      marginTop: 0,
     
    },
    loginButtonStyle: {
    
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