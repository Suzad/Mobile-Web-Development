import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

const ProfileScreen=()=>{
    return(
        <View style={styles.viewStyle}>
            <Image source={require("./../../assets/myPic.png")} style={styles.imageStyle} resizeMode="contain" />
            <Text style={styles.textStyle}><Text style={{fontWeight: "bold"},{fontSize:20},{textDecorationLine: 'underline'}}>Name:</Text> Suzad Mohammad Zilkod</Text>
            <Text style={styles.textStyle}><Text style={{fontWeight: "bold"},{fontSize:18},{textDecorationLine: 'underline'}}>Student ID:</Text> 170042024</Text>
            <Text style={styles.textStyle}><Text style={{fontWeight: "bold"},{fontSize:18},{textDecorationLine: 'underline'}}>Room No:</Text> 504, South Hall of Residence</Text>
            <Text style={styles.textStyle}><Text style={{fontWeight: "bold"},{fontSize:18},{textDecorationLine: 'underline'}}>Email:</Text> suzadmohammad@iut-dhaka.edu</Text>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            alignItems:"center",
            justifyContent:"center",
            paddingVertical:50,
        },
        imageStyle:{
            height:300,
            width:200,
        },
        textStyle:{
            fontSize:15,
        },
    },
);

export default ProfileScreen;