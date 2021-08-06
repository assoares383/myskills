import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = () => {
    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={handleAddNewSkill}
            >
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
});

export default Button;

