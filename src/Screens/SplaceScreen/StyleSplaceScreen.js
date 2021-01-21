import {StyleSheet} from 'react-native'
import resp from 'rn-responsive-font'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'

    }, 
    ImageView:{
        height:150,
        width:150,
        backgroundColor: 'transparent'
    },
    CartTextStyle:{
        marginLeft:resp(40),
        marginTop:resp(2),
        fontSize:resp(40),
        color:'#000',
        fontWeight:'bold',
        height:resp(60),
        width:resp(250)
    },
    loading: {

        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default styles