import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import SignInScreen from './src/screen/SignInScreen';

import {AuthContext, AuthProvider} from './src/provider/AuthProvider'

const HomeStack=createStackNavigator();
const AuthStack=createStackNavigator();

const HomeStackScreen=()=>{
  return(
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const AuthStackScreen=()=>{
  return(
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />
    </AuthStack.Navigator>
  );
}

function App(){
  return(
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>(<NavigationContainer>
          {auth.isLoggedIn ?  <HomeScreen /> : <AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer>
    </AuthProvider>
    
  );
}

export default App;