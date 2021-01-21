import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
    
    },
    OngoingText:{
        fontSize:18,
        marginLeft:10,
        marginTop:10,
        color:'#000',
        fontWeight:'bold'
    },
    OngoingImages:{
        width:'95%',
        height:250,
    },
    PastText:{
        marginTop:10,
        fontSize:18,
        marginLeft:10,
        color:'#000',
        fontWeight:'bold'
    },
    
    OngoingContainer:{
        flex:0.5,
        margin:10,
        width:360,
        height:200,
        
    },
    PastContainer:{
        margin:10,
        flex:0.5,
       
       
    },
  });
  export default styles;