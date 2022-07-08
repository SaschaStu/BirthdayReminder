import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iuts = {name: 'Sebastian', date: '2022-07-07', category:'work'};
const iutms = {name: 'Hans', date: '2022-07-29', category:'family'};
let keyArray = [];

const pattern = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;



const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      } catch (e) {
        console.log(e+'storeData Error');
      }
  }


  const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) {
          // value previously stored
        console.log('holy shit');
        console.log(JSON.parse(value).name)
        }
      } catch(e) {
        console.log(e+'getData Error');
      }
    
}

const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
      console.log(e+'getAllKeys Error');
    }
    keyArray = keys;
    //console.log(keys);
  }

  function getNewKey(){
    const key = '@MyApp_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    getAllKeys();
    while(keyArray.includes(key)){
      getNewKey();
    }
    return key;
  }

  function verifyData(object){
    if(object.name === '' || object.date === '' || object.category === ''){
      console.log('Empty field');
      return false;
    }
    if(!pattern.test(object.date)){
      console.log('Wrong date format');
      return false;
    }
    console.log('Input Successful');
    return true;

  }

  const removeAll = async () => {
    getAllKeys();
    const keys = keyArray;
    try {
      await AsyncStorage.multiRemove(keys)
    } catch(e) {
      // remove error
    }
  
    console.log('Done')
  }
  

export default function sendItems(object){
  console.log(object)
  if(verifyData(object)){
    storeData(object, getNewKey());
  }

    
      return(
        console.log('pp')
      )
  };

