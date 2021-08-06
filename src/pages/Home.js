import React, { useState } from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet, 
    Platform 
} from 'react-native';

import Button from '../components/Button';
import SkillCard from '../components/SkillCard';

const Home = () => {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

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

                <Button />

                <Text 
                    style={[styles.title, {marginVertical: 50}]}>
                    My Skills
                </Text>

                {   
                    mySkills.map(skill => (
                        <SkillCard />
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
    }
});

export default Home;