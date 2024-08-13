import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, View, Animated, Dimensions } from 'react-native'
import FormHeader from './app/components/FormHeader'
import FormSelectorBtn from './app/components/FormSelectorBtn'
import LogingForm from './app/components/LoginForm'
import SignupForm from './app/components/SignupForm'
import React, { useRef } from 'react'

const { width } = Dimensions.get('window')

export default function App() {
  const animation= useRef(new Animated.Value(0)).current
  const scroll_view =useRef()

  const left_header_translateX = animation.interpolate({
    inputRange:[0, width],
    outputRange:[0, 40],
  })

  const right_header_opacity = animation.interpolate({
    inputRange:[0, width],
    outputRange:[1, 0],
  })
  
  const right_header_translateY = animation.interpolate({
    inputRange:[0, width],
    outputRange:[0, -20],
  })

  const loginColorInterpolate = animation.interpolate({
    inputRange:[0, width],
    outputRange:['rgba(27,27,81,1)' , 'rgba(27,27,81,0.4)'],
  })

  const signupColorInterpolate = animation.interpolate({
    inputRange:[0, width],
    outputRange:['rgba(27,27,81,0.4)' , 'rgba(27,27,81,1)'],
  })

  

  return (
    <View style={styles.container}>
      <View style={styles.container_header}>
        <FormHeader
          left_header='Welcome '
          right_header='Back'
          sub_text='Youtube task' 
          right_header_opacity={right_header_opacity}
          left_header_translateX={left_header_translateX}
          right_header_translateY={right_header_translateY}
          />
      </View>
      <View style={styles.container_nav}>
        <FormSelectorBtn
          style={styles.border_left}
          backgroundColor={loginColorInterpolate}
          title='Login'
          onPress={()=> scroll_view.current.scrollTo({x: 0})}
        />
        <FormSelectorBtn
          style={styles.border_right}
          backgroundColor={signupColorInterpolate}
          title='Sign Up'
          onPress={()=> scroll_view.current.scrollTo({x: width})}
        />

      </View>
      <ScrollView
        ref={scroll_view}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // onScroll={({nativeEvent})=> console.log
        // (nativeEvent.contentOffset)} //Hear we are using the onScroll event to get the current position of the scroll view
        onScroll={Animated.event([{
          nativeEvent: {contentOffset: {x: animation}}}],
          {useNativeDriver: false}
        )}
      >
        <LogingForm />
        <ScrollView>
          <SignupForm />
          
        </ScrollView>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,

  },
  container_header: {
    height: 100,

  },
  container_nav: {
    flexDirection: 'row',
    padding: 20,

  },
  border_left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginBottom: 20,
  },
  border_right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

})
