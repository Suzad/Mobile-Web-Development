import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const FacultyListScreen=()=>{
    const Faculty=[
        {name:"Dr. Md. Hasanul Kabir", key:"1",}, 
        {name:"Dr. Obaidur Rahman", key:"2",}, 
        {name:"A.B.M. Ashikur Rahman", key:"3",}, 
        {name:"Redwan Karim Sony", key:"4",}, 
        {name:"Faisal Hussain", key:"5",}, 
        {name:"Talha Ibn Aziz", key:"6",}, 
        {name:"Shahriar Ivan", key:"7",}, 
        {name:"Fardin Saad", key:"8",}, 
        {name:"Anas Jawad", key:"9",}, 
        {name:"Mezbaur Rahman Uschash", key:"10",},
        {name:"Dr. Md. Mahbub Alam", key:"11",},
        {name:"Dr. Md. Abdul Hakim Khan", key:"12",},
        {name:"Dr. Fazlul Hasan Siddiqui", key:"13",},
        {name:"Mr. Sohel Ahmed", key:"14",},
        {name:"Mr. Ashraful Alam Khan", key:"15",},
        {name:"Mr. Mohayeminul Islam", key:"16",},
        {name:"Mr. Tasnim Ahmed", key:"17",},
        {name:"Mrs. Lutfun Nahar Lota", key:"18",},
        {name:"Md. Sabit Bananee", key:"19",},
    ];

    return(
        <View style={styles.viewStyle}>
            <FlatList
                data={Faculty}
                renderItem={function({item}){
                return(<Text style={styles.textStyle}>{item.key}. {item.name}</Text>);
                }}
            />
        </View>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            alignItems:"center",
            paddingVertical:10,
        },
        textStyle:{
            fontSize:20,
            marginVertical:10,
        },
    },
);

export default FacultyListScreen;