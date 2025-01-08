/*
Mobile and hybrid technologies Task 1 - Heart Rate Calculator
*/
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const numericAge = parseInt(age);

    if (isNaN(numericAge)) {
      setResult('Invalid Input');
      return;
    }

    const lower = (220 - numericAge) * 0.65;
    const upper = (220 - numericAge) * 0.85;
    setResult(`${lower.toFixed(0)} - ${upper.toFixed(0)}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        placeholder="Enter your age"
        onChangeText={e => setAge(e)}
        keyboardType='numeric'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{result}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  field: {
    margin: 50,
    fontSize: 40,
    marginBottom: 10,

  }
});
