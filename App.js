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
  Button
} from 'react-native';

const App = () =>  {

  const [phone,setPhone] = useState("");

  const URL = "https://youtu.be/tiaj_OtxWTo"

  const data = {
    message:URL,
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

  return (
    <SafeAreaView >
      <View>
        <Text style={{color:"black"}} >Hey...</Text>
        <TextInput placeholder='Enter Phone' 
          onChangeText={setPhone} 
          value={phone} 
        />
        {phone ? console.log("Phone",phone) : console.log("Not Stored...")}
        <Button onPress={sendSMS} title="Send SMS" />
      </View>
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
