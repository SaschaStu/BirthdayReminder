import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import sendItems from './../Functions/sendItems';

export default function AddBirthdayScreen(){

    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'friends', value: 'friends'},
    {label: 'familky', value: 'familky'},
    {label: 'work', value:'work'},
    {label: 'other', value: 'other'}
  ]);

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Name:</Text>
            <TextInput placeholder='Name'></TextInput>
            <Text>Birthday:</Text>
            <TextInput placeholder='YYYY-MM-DD'></TextInput>
            <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems}/>
            <Button onPress={sendItems} title="Confirm"></Button>
        </View>
    )
}