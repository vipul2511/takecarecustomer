import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'


const styles = StyleSheet.create({
    Container: {
        flex: 1,
       
       
        backgroundColor:'#fff'
       
        
      },
      AdditionalDetailsText:{
          marginTop:resp(20),
          marginLeft:resp(20),
          fontSize:resp(15),
          fontWeight:'bold'
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
      input: {
        paddingVertical: resp(0),
        paddingLeft: resp(20),
        flex: 1,
        height:200,
       
        width:'90%',
        borderRadius: resp(0),
        elevation: resp(1),
      },
    
    hederTextStyle:{
        marginTop:15,
        justifyContent:'center',
        color:'#fff',
        fontSize:22,
        fontWeight:'bold'
        
      },
      headerContainer: {
        flexDirection: 'row',
        height:50,
        width:'100%',
        backgroundColor: '#b31474',
      },
      MenuHomeIconStyle: {
        marginLeft: resp(10),
        marginTop: resp(10),
        height: resp(30),
        width: resp(26),
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
      },
      loginButtonStyle: {
        marginTop: 10,
        width: '90%',
        height: resp(50),
        padding: 10,
        backgroundColor: '#b31474',
        borderRadius:5,
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