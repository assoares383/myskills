import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Text>Hello React Native</Text>
      </View>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>Ignite - Trilha React Native</Text>
    </>
  )
};

export default App;