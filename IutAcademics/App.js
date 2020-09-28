import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FacultyListScreen from './src/screens/FacultyListScreen';
import SemesterScreen from './src/screens/SemesterScreen';
import CourseList1stSemesterScreen from './src/screens/CourseList1stSemesterScreen';
import CourseList2ndSemesterScreen from './src/screens/CourseList2ndSemesterScreen';
import CourseList3rdSemesterScreen from './src/screens/CourseList3rdSemesterScreen';
import CourseList4thSemesterScreen from './src/screens/CourseList4thSemesterScreen';
import CourseList5thSemesterScreen from './src/screens/CourseList5thSemesterScreen';
import CourseList6thSemesterScreen from './src/screens/CourseList6thSemesterScreen';

const stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Profile" component={ProfileScreen}/>
        <stack.Screen name="Faculty List" component={FacultyListScreen}/>
        <stack.Screen name="Semester" component={SemesterScreen}/>
        <stack.Screen name="Course List 1" component={CourseList1stSemesterScreen}/>
        <stack.Screen name="Course List 2" component={CourseList2ndSemesterScreen}/>
        <stack.Screen name="Course List 3" component={CourseList3rdSemesterScreen}/>
        <stack.Screen name="Course List 4" component={CourseList4thSemesterScreen}/>
        <stack.Screen name="Course List 5" component={CourseList5thSemesterScreen}/>
        <stack.Screen name="Course List 6" component={CourseList6thSemesterScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;