import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,View} from 'react-native';
import { TextInput,Appbar,Button   } from 'react-native-paper';

 Home = ()=> {
  const [text, setText] = useState('');

  return (
    <View style={styles.container, {marginTop:40}}>
    <Appbar.Header style={{height:30}} >
      <Appbar.Content  style={{height:50,fontSize:50}}   title="Love % Calculator" />
    </Appbar.Header>

    <TextInput
    style={styles.textIn}
      label="Enter Person Name(Male)"
      value={text}
      onChangeText={text => setText(text)}
      />
     
     
     <TextInput
     style={styles.textIn}
       label="Enter Person Name(Female)"
       value={text}
       onChangeText={text => setText(text)}
       />
      
      <Button icon="heart" style={{marginHorizontal:0,height:40}} mode="contained" onPress={() => console.log('Pressed')}>
      Calculate
  </Button>

      

     <StatusBar />
   </View>
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textIn:{
    marginVertical:5
  }
});


export default Home;