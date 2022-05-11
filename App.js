/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const App = () =>  {

  const [phone,setPhone] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);


  const URL = "https://youtu.be/tiaj_OtxWTo"



  const data = {
    payload:URL,
    phone:phone
  }

  const sendSMS = async() => {
    try {
      fetch("http://localhost:5500/sms" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        setPhone("")
      })
    } catch (e) {
      console.log("ERROR",e)
    }
  }

  const remoteItems = [
    {id: 1, title: 'Item 1', val: 'item-1',icon:() => <Image source={{uri:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop'}} style={{width:20,height:20}} />},
    {id: 2, title: 'Item 2', val: 'item-2',icon:() => <Image source={{uri:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop'}} style={{width:20,height:20}} />},
  ];

  return (
    // <SafeAreaView >
    //   <View>
    //     <Text style={{color:"black"}} >Hey...</Text>
    //     <TextInput placeholder='Enter Phone' 
    //       onChangeText={setPhone} 
    //       value={phone} 
    //     />
    //     {phone ? console.log("Phone",phone) : console.log("Not Stored...")}
    //     <Button onPress={sendSMS} title="Send SMS" />
    //   </View>
    // </SafeAreaView>
    <SafeAreaView>
        <DropDownPicker
        schema={{
          label: 'title',
          value: 'val',
          icon:'icon'
        }}
      open={open}
      value={value}
      items={remoteItems}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      iconContainerStyle={{marginLeft:50}}
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
