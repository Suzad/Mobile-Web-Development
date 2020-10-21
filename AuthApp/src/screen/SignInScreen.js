import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import {AuthContext} from '../provider/AuthProvider';
import {getDataJson} from '../function/AsyncStorageFunction';

const SignInScreen=(props)=>{
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    return(
        <AuthContext.Consumer>
            {(auth)=>(<View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome to AuthApp!</Card.Title>
                <Card.Divider />
                <Input 
                leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
                placeholder="E-mail Address"
                onChangeText={function(currentInput){
                    setEmail(currentInput);
                }}
                />
                <Input 
                secureTextEntry={true}
                placeholder="Password"
                leftIcon={<Entypo name="key" size={24} color="black" />}
                onChangeText={function(currentInput){
                    setPassword(currentInput);
                }}
                />
                <Button 
                icon={<AntDesign name="login" size={24} color="black" />}
                title=" Sign In"
                type="solid"
                onPress={async function(){
                    let userData=await getDataJson(Email);
                    if(userData.password==Password){
                        auth.setIsLoggedIn(true);
                        auth.setCurrentUser(userData);
                    }
                    else{
                        alert("Login Failed");
                        console.log(userData);
                    }
                }}
                />
                <Button 
                title=" Don't have an account?"
                icon={<AntDesign name="user" size={24} color="black" />}
                onPress={function(){
                    props.navigation.navigate("SignUp");
                }}
                type="clear"
                />
            </Card>
        </View>)}
        </AuthContext.Consumer>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            flex:1,
            justifyContent:"center",
            backgroundColor:"#4bacb8",
        },
    }
);

export default SignInScreen;