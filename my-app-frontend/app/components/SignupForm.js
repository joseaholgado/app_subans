import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormContainer from './FormContainer'
import FormInput from './FormInput'
import FormSubmitBtn from './FormSubmitBtn'
import { useState } from 'react'
import { is_valid_email, is_valid_obj_field, update_error } from '../utils/methods'
import { post_user } from '../utils/api'

const SignupForm = () => {
    const [userInfo, setUserInfo] = useState({
        full_name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const [error, setError] = useState('')

    const { full_name, email, password, confirm_password } = userInfo

    const handleOnChangeText = (value, field_name) => {
        setUserInfo({ ...userInfo, [field_name]: value })
        
    }

    const is_valid_form = () => {
        if (!is_valid_obj_field(userInfo)) return update_error('Required all fields!', setError)

        if (!full_name.trim() || full_name.length < 3) return update_error('Invalid name!', setError)

        if (!is_valid_email(email)) return update_error('Invalid email!', setError)

        if (!password.trim() || password.length < 8) return update_error('Password is less than 8 characters!', setError)

        if (password !== confirm_password) return update_error('Passwords do not match!', setError)

        return true
    }

    
    const submit_form = async () => {
        if (is_valid_form()) {
            try {
                const userData = {
                    id:5,
                    id_range: 1, 
                    name: full_name,
                    email: email,
                    password:password
                }
                const data = await post_user(userData) // Usa la función importada
                console.log('User created:', data)
            } catch (error) {
                setError(error.message || 'Error connecting to server')
            }
        }
    }

    return (
        <FormContainer>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FormInput
                value={full_name}
                onChangeText={(value) => handleOnChangeText(value, 'full_name')}
                autoCapitalize='none'
                label='Full Name'
                placeholder='Jose'
            />
            <FormInput
                value={email}
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                autoCapitalize='none'
                label='Email'
                placeholder='example@email.com'
            />
            <FormInput
                value={password}
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                autoCapitalize='none'
                secureTextEntry
                label='Password'
                placeholder='********'
            />
            <FormInput
                value={confirm_password}
                onChangeText={(value) => handleOnChangeText(value, 'confirm_password')}
                autoCapitalize='none'
                secureTextEntry
                label='Confirm Password'
                placeholder='********'
            />
            <FormSubmitBtn onPress={submit_form} title='Sign Up' />
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    }
})

export default SignupForm
