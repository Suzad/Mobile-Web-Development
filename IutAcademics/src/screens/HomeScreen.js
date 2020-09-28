import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const HomeScreen=(props)=>{
    return(
        <View style={styles.viewStyle} >

            <Image source={require("./../../assets/IutLogo.png")} style={styles.imageStyle} resizeMode="contain" />

            <Text style={styles.headingTextStyle}>Department of CSE</Text>

            <Text style={styles.subHeadingTextStyle}>Programme: SWE</Text>

            <TouchableOpacity
                onPress={function(){
                    props.navigation.navigate("Profile");
                }}>
                <Text style={styles.textStyle3}>My Profile</Text>
            </TouchableOpacity>

            <View style={styles.buttonStyle}>
                <Button title="Semesterwise Course List"
                    onPress={
                        function(){
                            props.navigation.navigate("Semester");
                        }
                    }/>
            </View>

            <View style={styles.buttonStyle}>
                <Button title="List of Faculty Members"
                    onPress={
                        function(){
                            props.navigation.navigate("Faculty List");
                        }
                    }/>
            </View>

        </View>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            alignItems:"center",
            paddingVertical:40,
        },
        imageStyle:{
            height:150,
            width:150,
        },
        headingTextStyle:{
            fontFamily:"notoserif",
            fontSize:35,
            paddingTop:20,
            paddingBottom:5,
        },
        subHeadingTextStyle:{
            fontFamily:"serif",
            fontSize:30,
            paddingBottom:20,
        },
        textStyle3:{
            fontFamily:"monospace",
            fontSize:25,
            justifyContent:"center",
            borderColor:"green",
            borderWidth:5,
            padding:8,
        },
        buttonStyle:{
            paddingTop:30,
            width:250,
        },
    },
);

export default HomeScreen;