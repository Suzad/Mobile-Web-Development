import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

const SemesterScreen=(props)=>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                Choose Semester
            </Text>
            <View style={styles.viewStyle}>
                <View style={styles.buttonViewStyle}>
                    <Button title="First Semester"  
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 1");
                            }
                        }/>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button title="Second Semester"
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 2");
                            }
                        }/>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button title="Third Semester" 
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 3");
                            }
                        }/>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button title="Fourth Semester"
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 4");
                            }
                        } />
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button title="Fifth Semester"
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 5");
                            }
                        } />
                </View>
                <View style={styles.buttonViewStyle}>
                    <Button title="Sixth Semester"
                        onPress={
                            function(){
                                props.navigation.navigate("Course List 6");
                            }
                        } />
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create(
    {
        viewStyle:{
            alignItems:"center",
            paddingVertical:30,
        },
        buttonViewStyle:{
            paddingVertical:20,
            width:170,
        },
        textStyle:{
            fontFamily:"serif",
            fontSize:30,
            alignSelf:"center",
        },
    },
);

export default SemesterScreen;