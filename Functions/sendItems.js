import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iuts = {name: 'Sebastian', date: '2022-07-07', category:'work'};
const iutms = {name: 'Hans', date: '2022-07-29', category:'family'};



const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.log('geht ned du wixxa')
      }
  }

  const pp = 'huan';

  const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
          // value previously stored
        console.log('holy shit');
        console.log(JSON.parse(value).name)
        }
      } catch(e) {
        console.log('geht ned du wixxa v2')
      }
    
}

const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
      console.log('ppReader');
    }
  
    console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }

export default function sendItems(props){

    storeData(iuts, '2');
    storeData(iutms,'4');
    getData('2');
    getAllKeys();
    
      return(
        console.log('pp')
      )
  };

