import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import resp from 'rn-responsive-font';
import { LOGIN_SCREEN, NavigationDrawer } from '../../constants/route';
import styles from './StyleSplaceScreen'

class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
    }


    showLoading() {
        this.setState({ loading: true });
    }

    hideLoading() {
        this.setState({ loading: false });
    }

    static navigationOptions = {
        title: 'Splash'
    };


    componentDidMount() {

        this.props.navigation.addListener('willFocus', this.load)
    }

    componentWillUnmount() {

        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }

    load = () => {
      
        this.showLoading();

        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition

            AsyncStorage.getItem('@is_login').then((isLogin) => {
                if (isLogin == undefined || isLogin == "0") {
                    this.props.navigation.navigate(LOGIN_SCREEN)
                } else if (isLogin == "1") {
                   this.props.navigation.navigate(NavigationDrawer)
               }
           });



        }, 4000);
       
    }


    render() {
        return (
            <View style={styles.container}>
            
               <Image source={require('../../assets/logo_splace.png')}
               style={styles.ImageView} />
                 
            
                  {this.state.loading && (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#b31474" />

                        

                    </View>
                )}

            </View>
             
           
  
        );
    }
}
export default SplashScreen