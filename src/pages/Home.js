import React, { useState } from 'react';
import { 
    View, 
    Text,
    TextInput,
    TouchableOpacity, 
    StyleSheet, 
    Platform 
} from 'react-native';

const Home = () => {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome, Alexandre</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="New Skill" 
                    placeholderTextColor="#555" 
                    onChangeText={setNewSkill}
                />

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={.7}
                    onPress={handleAddNewSkill}
                    >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity> 

                <Text 
                    style={[styles.title, {marginVertical: 50}]}>
                    My Skills
                </Text>

                {   
                    mySkills.map(skill => (
                        <TouchableOpacity style={styles.buttonSkill}>
                            <Text style={styles.textSkill} key={skill}>
                                {skill}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
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
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#FFF',
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
    },
    skill: {
        color: '#FFF',
        backgroundColor: '#1F1E25',
        padding: 15,
        fontSize: 22,
        fontWeight: 'bold',
        borderRadius: 20,
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 12
    },  
    textSkill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Home;