import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AddBirthdayScreen from './Screens/AddBirthdayScreen';
import BirthdayListScreen from './Screens/BirthdayListScreen';
import CalendarScreen from './Screens/CalendarScreen';



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Birthday Calendar" component={CalendarScreen}/>
                <Tab.Screen name="Birthdays" component={BirthdayListScreen}/>
                <Tab.Screen name="Add Birthday" component={AddBirthdayScreen}/>
            </Tab.Navigator>

        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
