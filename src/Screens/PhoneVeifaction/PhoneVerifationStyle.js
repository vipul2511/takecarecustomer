import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'

const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
      },
      styleImageTOP:{
        height:resp(250),
        width:"100%",
      },
      logoStyle:{
       
        alignSelf:'center',
        marginTop:75,
        height:100,
        width:100,
      },
      CartTextStyle: {
        marginTop:15,
        width: '70%',
        marginLeft:45,
       alignSelf:'center',
        fontSize: resp(12),
        color: '#fff',
        
      
      },
      CartTextStyle3:{
        marginTop:5,
        width: '50%',
        marginLeft:45,
       alignSelf:'center',
        fontSize: resp(12),
        color: '#fff',  
    },
    CartTextStyle4:{
        marginTop:5,
        width: '30%',
        marginLeft:45,
       alignSelf:'center',
        fontSize: resp(12),
        color: '#fff',  
    },
      BackButtonContainer: {
          marginTop:10,
        flex: 0.4,
        marginLeft: 10,
        backgroundColor: '#b31474',
      },
      backButtonStyle: {
    
        height: 30,
        width: 30,
      },
      CartTextStyle2: {
        marginTop:80,        
       
       alignSelf:'center',
        fontSize: resp(25),
        color: '#fff',
        fontWeight:'bold'
        
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
      container3: {
        flex: 0.7,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
      },
      PhoneBox: {
        margin: resp(40),
       
      },
      logoContainer: {
       
        flex:0.3,
        width:'100%'
       
      },
      BottomTextStyle:{
        textAlign:'center',
        marginTop:resp(310),
        fontSize:15,
        color:'#c9c3c7'
        
      },
      SignButtonStyle:{
        marginTop:5,
        textAlign:'center',
        color:"#b31474",
        textDecorationLine:'underline'

      },
      headerContainer: {
        flexDirection: 'row',
        flex: .2,
        backgroundColor: 'green',
      },
      MenuHomeIconStyle: {
        marginLeft: resp(10),
        marginTop: resp(20),
        height: resp(30),
        width: resp(26),
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
      },
      buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(16),
        color: 'white',
        alignContent: 'center',
      },
      ImageView: {
        height: resp(97.73),
        width: resp(93.75),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
      },
      UserName: {
        color: 'black',
        width: resp(340),
        fontSize: resp(12),
        textAlign: 'left',
        opacity: 0.5,
      },
    
      TextInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: resp(5),
        
        marginVertical: resp(8),
      },
      textInput:{
        fontSize:16,
      },
      visibilityBtn:
      {
         
        position: 'absolute',
        right: 3,
        height: 40,
        width: 35,
        padding: 5
      },
      btnImage:
      {
          
        
       resizeMode: 'contain',
        height: '100%',
        width: '100%'
     },
      input: {
        paddingVertical: resp(0),
        paddingLeft: resp(20),
        flex: 1,
        
        borderRadius: resp(0),
        elevation: resp(1),
      },
    
      inputView: {
        width: '90%',
        marginBottom: 15,
        width: resp(350),
        borderColor: '#b31474',
        borderBottomWidth: 1,
      },
      loginButtonStyle: {
        marginTop: 10,
        width: resp(350),
        height: resp(50),
        padding: 10,
        backgroundColor: '#b31474',
        borderRadius:5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      },
})

export default style;