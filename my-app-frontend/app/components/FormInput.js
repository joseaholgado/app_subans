import React from 'react'
import {  Text, TextInput, StyleSheet } from 'react-native'



const FormInput = (props) => {
    const { placeholder, label} =props
    return (
        <>
            <Text style={{ fontWeight: 'bold' }}>{label}</Text>
            <TextInput
               {...props}
                placeholder={placeholder}
                style={styles.input}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        height: 35,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20,
    },

})

export default FormInput
