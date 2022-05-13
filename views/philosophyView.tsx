import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PhilosophyView() {
  const [translateText, setTranslateText] = useState('')
 
  return (
    
    <View style={styles.container}>
      <Text>Provide your philosophy and I'll translate it</Text>
      <TextInput style={{height:40}} 
          placeholder="Provide your text" 
          defaultValue={translateText}
          onChange={(e)=>setTranslateText(e)}
      />

      <Text>{translateText.length> 10 ? translateText.split(' ').map((t)=>'blah').join(' '):''}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
