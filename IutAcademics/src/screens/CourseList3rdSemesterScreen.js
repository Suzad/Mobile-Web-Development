import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList3rdSemesterScreen=()=>{
    const Course=[
        {name:"MATH 4341", key:"1",}, 
        {name:"CSE 4303", key:"2",}, 
        {name:"CSE 4305", key:"3",}, 
        {name:"CSE 4307", key:"4",}, 
        {name:"CSE 4309", key:"5",}, 
        {name:"SWE 4301", key:"6",}, 
        {name:"CSE 4304", key:"7",}, 
        {name:"CSE 4308", key:"8",}, 
        {name:"SWE 4302", key:"9",}, 
        {name:"SWE 4304", key:"10",},
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                Third Semester
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

export default CourseList3rdSemesterScreen;