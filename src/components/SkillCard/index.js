import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SkillCard = ({ skill }) => {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default SkillCard;

