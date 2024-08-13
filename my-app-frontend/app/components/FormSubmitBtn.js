import React from 'react'
import {  Text, StyleSheet, TouchableOpacity } from 'react-native'



const FormSubmitBtn = ({title, onPress} ) => {
    return (
     <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.submit}>{title}</Text>
        
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container:
    {
        height: 45,
        backgroundColor: 'rgba(27,27,51,1)',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        alignContent: 'center',
    },
    submit: {
        color: 'white',
        fontSize: 18,
        
    }

})

export default FormSubmitBtn
