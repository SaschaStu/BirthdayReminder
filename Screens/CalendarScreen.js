import { View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import React from 'react';
import {getData, getAllKeys }from './../Functions/sendItems';

let datesArray=[];

const friends = {key: 'green', color: 'green'};
const family = {key: 'red', color: 'red'};
const work = {key: 'blue', color: 'blue'};
const other = {key: 'gray',color:'gray'};
const pp = {'2022-07-09':{dots: [friends]}};
const pp2 = {'2022-07-08':{dots: [friends, family]}};
datesArray.push(pp);
datesArray.push(pp2);



function getBirthdays(){
    
    datesArray.push();
    console.log(datesArray);
    console.log(Object.assign({}, datesArray));
    return Object.assign({}, datesArray);
}


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

export default function CalendarScreen() {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray' }}>

            <Calendar

                markingType={'multi-dot'}
                markedDates={datesArray[0]}
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
