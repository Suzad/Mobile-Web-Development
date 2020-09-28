import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const CourseList3rdSemesterScreen=()=>{
    const Course=[
        {name:"HUM 4441", key:"1",}, 
        {name:"MATH 4441", key:"2",}, 
        {name:"CSE 4403", key:"3",}, 
        {name:"CSE 4409", key:"4",}, 
        {name:"CSE 4411", key:"5",}, 
        {name:"SWE 4401", key:"6",}, 
        {name:"CSE 4404", key:"7",}, 
        {name:"CSE 4410", key:"8",}, 
        {name:"CSE 4412", key:"9",}, 
        {name:"SWE 4402", key:"10",},
        {name:"SWE 4404", key:"11",},
    ];

    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleTextStyle}>
                Fourth Semester
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