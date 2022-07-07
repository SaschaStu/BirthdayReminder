import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import AddBirthdayScreen from './Screens/AddBirthdayScreen';

LocaleConfig.locales['de'] = {
    monthNames: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayNamesShort: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
    today: "heute"
  };
  LocaleConfig.defaultLocale = 'de';

function CalendarScreen() {


    const friends = {key: 'friends', color: 'green'};
    const family = {key: 'family', color: 'red'};
    const work = {key: 'work', color: 'blue'};
    const other = {key: 'other',color:'gray'};
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray' }}>

            <Calendar

                markingType={'multi-dot'}
                markedDates={{
                    '2022-07-07': {dots: [friends, family, work, other]},
                    '2022-07-08': {dots: [family, work]}
                }}
            hideExtraDays={true}
            showWeekNumbers={true}
            enableSwipeMonths={true}
            style={{
                borderWidth: 1,
                borderColor: 'gray',
                width: 300
    
            }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#b6c1cd',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'blue',
                indicatorColor: 'blue',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 16,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 16
            }}
            />
        </View>
    );
}

function BirthdayScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Birthday Screen</Text>
        </View>
    );
}






function sendItems(props){



}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Birthday Calendar" component={CalendarScreen}/>
                <Tab.Screen name="Birthdays" component={BirthdayScreen}/>
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
