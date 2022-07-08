import { StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating';

let keyArray =[];
let dataArray =[];


const getAllKeys = async ()=> {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
      console.log(e+'getAllKeys Error');
    }finally{
        keyArray = keys;
    }
  }

  const getData = async (keys) => {
    console.log(keys);

    for(let i = 0; i < keys.length; i++){
        try {
            const value = await AsyncStorage.getItem(keys[i])
            console.log(value);
            if(value !== null) {
              // value previously stored
                dataArray.push(JSON.parse(value));
            }
        } catch(e) {
            console.log(e+'getData Error');
          }
        
            
    }
    
}


const DATA = [
    {
        id: '1',
        name: 'John',
        date: '2020-07-04',
        category: 'green',
    },
    {
        id: '2',
        name: 'Jane',
        date: '2020-01-02',
        category: 'blue',
    },
    {
        id: '3',
        name: 'Jane',
        date: '2020-12-20',
        category: 'blue',
    },
    {
        id: '4',
        name: 'Jane',
        date: '2020-02-05',
        category: 'blue',
    },
];

function sortDate(data){
    const sortedDate = [];
    const unsortedDate = [];
    for(let i = 0; i < data.length; i++){
        const dateArray= data[i].date.split('-');
        sortedDate.push(dateArray[1]+dateArray[2])
        unsortedDate.push(dateArray[1]+dateArray[2]);
    }
    sortedDate.sort();

    for(let i = 0; i < sortedDate.length; i++){
        for(let j = 0; j < unsortedDate.length; j++){
            if(sortedDate[i] === unsortedDate[j]){
                dataArray.push(data[j]);
            }
        }
    }
    return dataArray;


}

function reformatDate(date){
    const dateArray = date.split('-');
   // console.log(dateArray);
    const tempDateArray = [];
    tempDateArray.push(dateArray[2]);
    tempDateArray.push(dateArray[1]);
    tempDateArray.push(dateArray[0]);
    const finalDate = tempDateArray[0] + '.' + tempDateArray[1];
    return finalDate;
}


const Item = ({name, date, category}) => (
    <View style={styles.item}>
        <Text style={styles.date}>{reformatDate(date)}</Text>
        <Text style={styles.name}>{name}</Text>
        <StarRating styles={styles.category} disabled={true} maxStars={1} rating={1} fullStarColor={category}/>
    </View>
)

export default function BirthdayListScreen() {
    const sortedDATA = sortDate(DATA);

    const renderItem = ({item}) => (
        <Item name={item.name} date={item.date} category={item.category} />
    );
    return (
        <View style={styles.container}>
            <FlatList data={sortedDATA} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        paddingLeft:30,
        fontSize: 32,
    },
    date: {
        fontSize: 24,
    },
});