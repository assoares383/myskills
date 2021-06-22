import React from 'react';
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity, 
    StyleSheet, 
    Platform 
} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Alexandre</Text>
        <TextInput 
            styles={ styles.input} 
            placeholder="New Skill" 
            placeholderTextColor="#555" 
        />

        <TouchableOpacity 
            style={styles.button}
            activeOpacity={.7}
            >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity> 

        <Text 
            style={[styles.title, {marginTop: 20}]}>
            My Skills
        </Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F2F2F2',
        color: '#fff',
        fontSize: 18,
        padding: Platform.Os === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    }
});

export default Home;