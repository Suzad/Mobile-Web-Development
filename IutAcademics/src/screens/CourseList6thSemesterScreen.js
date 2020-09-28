import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList6thSemesterScreen=()=>{
    const Course=[
        {name:"MATH 4643", key:"1",}, 
        {name:"CSE 4617", key:"2",}, 
        {name:"CSE 4621", key:"3",}, 
        {name:"SWE 4601", key:"4",}, 
        {name:"SWE 4603", key:"5",}, 
        {name:"CSE 4635", key:"6",}, 
        {name:"CSE 4618", key:"7",}, 
        {name:"CSE 4622", key:"8",}, 
        {name:"SWE 4602", key:"9",}, 
        {name:"SWE 4604", key:"10",},
        {name:"SWE 4606", key:"11",},
        {name:"CSE 4636", key:"12",},
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                Sixth Semester
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

export default CourseList6thSemesterScreen;