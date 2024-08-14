import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import { is_valid_obj_field, update_error, is_valid_email } from '../utils/methods';
import Petition from '../utils/api'

const LoginForm = () => {
    const [user_info, setUser_info] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user_info;
    const [error, setError] = useState('');

    const handleOnChangeText = (value, field_name) => {
        setUser_info({ ...user_info, [field_name]: value });
    }

    const is_valid_form = () => {
        if (!is_valid_obj_field(user_info)) return update_error('Required all fields!', setError);

        if (!is_valid_email(email)) return update_error('Invalid email!', setError);

        if (!password.trim() || password.length < 8) return update_error('Password is less than 8 characters!', setError);

        return true;
    }

    
    const submit_form = async () => {
        if (is_valid_form()) {
            try {
                const data = await Petition(email, password);
                console.log('Respuesta del servidor:', data);
                // Aquí puedes manejar la respuesta del backend, como redireccionar al usuario o guardar un token.
            } catch (error) {
                setError('Error al conectarse con el servidor');
            }
        }
    }

    return (
        <FormContainer>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <FormInput
                value={email}
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                label='Email'
                placeholder='Enter your email'
                autoCapitalize='none'
            />
            <FormInput
                value={password}
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                label='Password'
                placeholder='********'
                autoCapitalize='none'
                secureTextEntry={true}
            />
            <FormSubmitBtn onPress={submit_form} title='Login' />
        </FormContainer>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    }
});

export default LoginForm;
