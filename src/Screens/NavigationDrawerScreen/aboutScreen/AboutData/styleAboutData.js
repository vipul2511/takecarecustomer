import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'


const styles = StyleSheet.create({
    MainContainer: {
      //flex: 1,
      height:50,
      backgroundColor:'blue',
      paddingTop: 20,
      alignItems: 'center',
      marginTop: 10,
     
    },
    loginButtonStyle: {
        marginTop: 10,
        width: resp(350),
        height: resp(50),
        padding: 10,
        borderRadius:5,
        backgroundColor: '#b31474',
      
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
      buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(16),
        color: 'white',
        alignContent: 'center',
      },
      
  });
  export default styles;