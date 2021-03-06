import React, {userstate} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AuthContext} from '../provider/AuthProvider';
import {Button} from 'react-native-elements';

const HomeScreen=()=>{
    return(
        <AuthContext.Consumer>
            {(auth)=>(
                <View>
                    <Text style={styles.textstyle}>Welcome {auth.currentUser.name}</Text>
                    <Button 
                    type="outline" 
                    title="Log Out"
                    onPress={function(){
                        auth.setIsLoggedIn(false);
                        auth.setCurrentUser({});
                    }} 
                    />
                </View>
            )}
        </AuthContext.Consumer>
        
    );
}

const styles=StyleSheet.create(
    {
        textstyle:{
            fontSize:30,
            color:"blue",
        },
    }
);

export default HomeScreen;