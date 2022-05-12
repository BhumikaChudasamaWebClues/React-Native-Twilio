import React, { FC, useState,useRef } from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Dropdown from './Dropdown';



const App: FC = () => {

    

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1', icon:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop' },
    { label: 'Two', value: '2', icon:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop' },
    { label: 'Three', value: '3', icon:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop' },
    { label: 'Four', value: '4', icon:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop' },
    { label: 'Five', value: '5',icon:'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop' },
  ];

  return (
    <View style={styles.container}>
      {/* {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )} */}
        <TouchableWithoutFeedback onPress={()=>{
            console.log("Pressed...")
    }}
       // style={{position:'absolute',top:0 , right:0 , bottom:0 ,left:0}}
        >
        <Dropdown label="Select Item" data={data} onSelect={setSelected} />

        </TouchableWithoutFeedback>
      {/* <Text>This is the rest of the form.</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;