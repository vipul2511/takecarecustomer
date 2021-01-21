
 import { View, Image, TouchableOpacity } from 'react-native';


import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,Feather} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import Sidebar from "./sliderBar";
//Import external files
import HomeScreen from './HomeScreen';
import AboutScreen from './aboutScreen';
import SettingScreen from './SettingScreen';
import RequestScreen from "./RequestScreen";
import privacy from './PrivacyPolicy';
import Logout from './LogoutScreen'
import TermAndCondition from "./TermAndCondition";
import sliderBar from './sliderBar';
import termsConditions from './TermAndCondition';
import RatingBarScreen from "./RatingBar";
import LogOutScreen from './LogoutScreen';

 
 class NavigationDrawer extends Component{
    
    toggleDrawer =()=>{
        this.props.navigationProps.toggleDrawer();
    };

    render(){
        return(

            <View style={{ flexDirection: 'row' }}>
             <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          
          <Image
            source={require('../../assets/menu_icon.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
        )
    }

}

const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        name:'HomeScreen',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const RequestScreen_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: RequestScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'My Booking',
        name:'RequestScreen',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: AboutScreen,
      name:'AboutScreen',
      navigationOptions: ({ navigation }) => ({
        title: 'About',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
  });
  
  const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Setting',
        name:'SettingScreen',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
    
  });
  const Privacy_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: privacy,
      navigationOptions: ({ navigation }) => ({
        title: 'Privacy ',
        name:'privacy',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
    
  });
  const Term_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: termsConditions,
      navigationOptions: ({ navigation }) => ({
        title: 'Terms Conditions',
        name:'termsConditions',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
    
  });
  const LogOUTStackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: LogOutScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'LogOut',
        name:'LogOutScreen',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
    
  });

  const RatingCarStackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: RatingBarScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'RatingBar',
        name:'RatingBar',
        headerLeft: ()=>
          <NavigationDrawer
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#b31474',
        },
        headerTintColor: '#fff',
      }),
    },
    
  });

  
  const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    HomeScreen: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        title:"Home",
        drawerLabel: 'Home',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/home.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    RequestScreen: {
      //Title
      screen: RequestScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'My Requests',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/food.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    AboutScreen: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'About',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/account.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    privacy: {
      //Title
      screen: Privacy_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Privacy Policy',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/lock.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    terms: {
      //Title
      screen: Term_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Terms Conditions',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/food.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    SettingScreen: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/setting.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    RatingBarScreen: {
      //Title
      screen: RatingCarStackNavigator,
      navigationOptions: {
        drawerLabel: 'Rating Bar',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/setting.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },
    LogoutScreen: {
      //Title
      screen: LogOUTStackNavigator,
      navigationOptions: {
        drawerLabel: 'Logout',
        drawerIcon:({headerTintColor})=> <Image
        source={require('../../assets/logout.png')}
        style={{ width: 25, height: 25, marginLeft: 10 }}
      />
      },
    },

    
  },
  {
    contentComponent:props=><Sidebar {...props}/>
  }
  );
  
export default createAppContainer(DrawerNavigatorExample) 

