import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList1stSemesterScreen=()=>{
    const Course=[
        {name:"HUM 4145", key:"1",}, 
        {name:"HUM 4147", key:"2",}, 
        {name:"MATH 4141", key:"3",}, 
        {name:"PHY 4143", key:"4",}, 
        {name:"CSE 4107", key:"5",}, 
        {name:"SWE 4101", key:"6",}, 
        {name:"HUM 4142", key:"7",}, 
        {name:"PHY 4144", key:"8",}, 
        {name:"CSE 4104", key:"9",}, 
        {name:"CSE 4108", key:"10",},
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                First Semester
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

export default CourseList1stSemesterScreen;