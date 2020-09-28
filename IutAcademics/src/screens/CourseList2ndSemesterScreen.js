import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList2ndSemesterScreen=()=>{
    const Course=[
        {name:"HUM 4247", key:"1",}, 
        {name:"HUM 4249", key:"2",}, 
        {name:"MATH 4241", key:"3",}, 
        {name:"CSE 4203", key:"4",}, 
        {name:"CSE 4205", key:"5",}, 
        {name:"SWE 4201", key:"6",}, 
        {name:"HUM 4242", key:"7",}, 
        {name:"CSE 4206", key:"8",}, 
        {name:"SWE 4202", key:"9",}, 
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                Second Semester
            </Text>
            <View style={styles.listViewStyle}>
                <FlatList
                    data={Course}
                    renderItem={function({item}){
                    return(<Text style={styles.textStyle}>{item.key}. {item.name}</Text>);
                    }}
                />
            </View>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            alignItems:"flex-start",
            padding:30,
        },
        listViewStyle:{
            paddingTop:20,
        },
        titleTextStyle:{
            fontFamily:"serif",
            fontSize:30,
            alignSelf:"center",
        },
        textStyle:{
            fontSize:20,
            marginVertical:5,
        },
    },
);

export default CourseList2ndSemesterScreen;