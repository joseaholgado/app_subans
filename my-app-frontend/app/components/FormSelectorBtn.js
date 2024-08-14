import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from "react-native"

const FormSelectorBtn = ({ title, backgroundColor,style, onPress }) => {
    return (
    <TouchableWithoutFeedback onPress={onPress} >
        <Animated.View style={[styles.container, style,{backgroundColor}]}>
            <Text style={styles.text}>{title}</Text>
        </Animated.View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '50%',
        backgroundColor: 'rgba(27,27,51,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: 16,
    },
})

export default FormSelectorBtn