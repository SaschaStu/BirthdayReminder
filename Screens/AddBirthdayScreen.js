import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import sendItems from './../Functions/sendItems';

export default function AddBirthdayScreen(){

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'friends', value: 'green'},
    {label: 'family', value: 'red'},
    {label: 'work', value:'blue'},
    {label: 'other', value: 'gray'}
  ]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  function handlePress(){
    sendItems({name: name, date: date, category: category});
    setOpen(false);
  }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Name:</Text>
            <TextInput placeholder='Name' onChangeText={(text) =>{setName(text)}}></TextInput>
            <Text>Birthday:</Text>
            <TextInput placeholder='YYYY-MM-DD' onChangeText={(text) => {setDate(text)}}></TextInput>
            <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} onChangeValue={(value) => {setCategory(value)}}/>
            <Button onPress={handlePress} title="Confirm"></Button>
        </View>
    )
}