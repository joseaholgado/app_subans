import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const FormHeader = ({ 
  left_header, 
  right_header, 
  sub_text,
  left_header_translateX = 40, 
  right_header_translateY = -20, 
  right_header_opacity = 0,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.header, 
            { transform: [{ translateX: left_header_translateX }] }
          ]}
        >
          {left_header}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.header,
            { 
              opacity: right_header_opacity, 
              transform: [{ translateY: right_header_translateY }] 
            }
          ]}
        >
          {right_header}
        </Animated.Text>
      </View>
      <Text style={styles.text}>{sub_text}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1b1b33',
  },
  text: {
    fontSize: 18,
    color: '#1b1b33',
    textAlign: 'center',
  },
})

export default FormHeader
