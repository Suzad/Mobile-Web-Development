import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList5thSemesterScreen=()=>{
    const Course=[
        {name:"MATH 4543", key:"1",}, 
        {name:"CSE 4501", key:"2",}, 
        {name:"SWE 4501", key:"3",}, 
        {name:"SWE 4503", key:"4",}, 
        {name:"CSE 4553", key:"5",}, 
        {name:"CSE 4539", key:"6",}, 
        {name:"MATH 4544", key:"7",}, 
        {name:"CSE 4502", key:"8",}, 
        {name:"SWE 4504", key:"9",}, 
        {name:"SWE 4506", key:"10",},
        {name:"CSE 4554", key:"11",},
        {name:"CSE 4540", key:"12",},
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                Fifth Semester
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

export default CourseList5thSemesterScreen;