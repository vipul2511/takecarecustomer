import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer, StackActions} from 'react-navigation'
import LoginScreen from './src/Screens/LoginScreen'
import SignUPScreen from './src/Screens/SignUpScreen'
import OTPScreen from './src/Screens/OTPScreen'
import ForgetPasswordScreen from './src/Screens/ForgetPasswordScreen'
import ResetPasswordScreen from "./src/Screens/ResetPasswordScreen";
import NavigationDrawer from "./src/Screens/NavigationDrawerScreen";
import SplaceScreen from "./src/Screens/SplaceScreen";
import NeedScreen from "./src/Screens/NavigationDrawerScreen/HomeScreen/NeedScreen";
import PhoneVerification from "./src/Screens/PhoneVeifaction";
import Voluntary_list from "./src/Screens/NavigationDrawerScreen/HomeScreen/VoluntaryList";
import AdditionalDetails from "./src/Screens/NavigationDrawerScreen/HomeScreen/NeedScreen/AdditionalDetails";
import PushNotification from 'react-native-push-notification';
import privacyData from "./src/Screens/NavigationDrawerScreen/PrivacyPolicy/PrivacyPolicyData";
import AboutData from "./src/Screens/NavigationDrawerScreen/aboutScreen/AboutData";
import TermAndCondition from "./src/Screens/NavigationDrawerScreen/TermAndCondition/TermAndConditionDATA";
import GET_REQUEST_LIST from "./src/Screens/NavigationDrawerScreen/HomeScreen/VoluntaryList/GetRequestList";
import { View } from 'react-native';



// PushNotification.configure();
// const messaging = firebase.messaging();

// messaging
//   .hasPermission()
//   .then((enabled) => {
//     if (enabled) {
//       messaging
//         .getToken()
//         .then((token) => {
//           console.log('fcm Token', token);
//           AsyncStorage.setItem('@fcmtoken', JSON.stringify(token));
//         })
//         .catch((error) => {
//           /* handle error */
//         });
//     } else {
//       messaging
//         .requestPermission()
//         .then(() => {
//           console.log('got permission');
//           /* got permission */
//         })
//         .catch((error) => {
//           console.log('not got permission');
//           /* handle error */
//         });
//     }
//   })
//   .catch((error) => {
//     /* handle error */
//   });
const NavStack = createStackNavigator(
  {
    // eslint-disable-next-line no-trailing-spaces

    LoginScreen: {screen: LoginScreen},
    SplaceScreen: {screen:SplaceScreen},
    SignUPScreen:{screen:SignUPScreen},
    OTPScreen:{screen:OTPScreen},
    ForgetPasswordScreen:{screen:ForgetPasswordScreen},
    ResetPasswordScreen:{screen:ResetPasswordScreen},
    NavigationDrawer:{screen:NavigationDrawer},
    NeedScreen:{screen:NeedScreen},
    privacyData:{screen:privacyData},
    AboutData:{screen:AboutData},
    PhoneVerification:{screen:PhoneVerification},
    Voluntary_list:{screen:Voluntary_list},
    AdditionalDetails:{screen:AdditionalDetails},
    TermAndCondition:{screen:TermAndCondition},
    GET_REQUEST_LIST:{screen:GET_REQUEST_LIST}
    
   
  },
 
  
  {
    
    initialRouteName: 'NavigationDrawer',
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      animationEnabled: false,
    })

     
  },
 
 
);
 


const Apps = createAppContainer(NavStack)

export default class App extends React.Component {

  componentDidMount(){
    PushNotification.configure({
      onNotification:function(notification){
        console.log("Notification===",notification)
      }
    })
  }
  render () {
    
    return (
      
      
      <Apps />
      
   

    )
     
  }
  
}


