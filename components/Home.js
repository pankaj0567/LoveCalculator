import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,View,Text} from 'react-native';
import { TextInput,Appbar,Button   } from 'react-native-paper';

 Home = ()=> {
  const [firstPersonName, setFirstPersonName] = useState('');
  const [secondPersonName, setSecondPersonName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState('');


  const calculate = () => {

    console.log('lick')
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${secondPersonName}&sname=${firstPersonName}`, {
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "24a60e2142mshc2914aecaafab7dp108179jsnc6a506cc429f"
        
      }
    })
    .then(data=>data.json())
    .then(data2=>{
      console.log(data2)
      setPercentage(data2.percentage)
      setResult(data2.result)
    })
    .catch(err => {
      console.error(err);
    });
    console.log('done')
}; //

  return (
    <View style={styles.container, {marginTop:40}}>
    <Appbar.Header style={{height:30}} >
      <Appbar.Content  style={{height:50,fontSize:50}}   title="Love % Calculator" />
    </Appbar.Header>

    <TextInput
    style={styles.textIn}
      label="Enter Person Name(Male)"
      value={firstPersonName}
      onChangeText={text => setFirstPersonName(text)}
      />
     
     
     <TextInput
     style={styles.textIn}
       label="Enter Person Name(Female)"
       value={secondPersonName}
       onChangeText={text => setSecondPersonName(text)}
       />
      
      <Button icon="heart" style={{marginHorizontal:0,height:40}} mode="contained" onPress={() => { calculate(); }}>
      Calculate
  </Button>

     <View style={styles.container,{marginTop:50,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.text}>{percentage}</Text>
        <Text style={{fontSize:20,color:'red'}}>{result}</Text>  
      </View>
      
     <StatusBar />
   </View>
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textIn:{
    marginVertical:5
  },
  text:{
    fontSize:40,
    color:'red'

  }
});


export default Home;