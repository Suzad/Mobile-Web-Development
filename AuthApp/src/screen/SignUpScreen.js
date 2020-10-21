import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import { FontAwesome, Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import {storeDataJson} from '../function/AsyncStorageFunction';

const SignUpScreen=(props)=>{
    const [Name,setName]=useState("");
    const [SID,setSID]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>Welcome to AuthApp!</Card.Title>
                <Card.Divider />
                <Input 
                leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
                placeholder="Name"
                onChangeText={function(currentInput){
                    setName(currentInput);
                }}
                />
                <Input 
                leftIcon={<Ionicons name="ios-school" size={24} color="black" />}
                placeholder="Student ID"
                onChangeText={function(currentInput){
                    setSID(currentInput);
                }}
                />
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
                icon={<AntDesign name="user" size={24} color="white" />}
                title=" Sign Up"
                type="solid"
                onPress={function(){
                    let currentUser={
                        name:Name,
                        sid:SID,
                        email:Email,
                        password:Password,
                    }
                    storeDataJson(currentUser.email,currentUser);
                    props.navigation.navigate("SignIn");
                }}
                />
                <Button 
                title=" Already have an account?"
                icon={<AntDesign name="login" size={24} color="dodgerblue" />}
                onPress={function(){
                    props.navigation.navigate("SignIn");
                }}
                type="clear"
                />
            </Card>
        </View>
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

export default SignUpScreen;