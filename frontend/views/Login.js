import React, { useState } from 'react'
import { View, TextInput, Button, Text, Platform } from 'react-native'
import { registerDeviceForNotifications } from '../registerDeviceForNotifications'
import { useHistory } from 'react-router'
  
export function Login(){

    const history = useHistory()

    const [ form, changeForm ] = useState({
        username: '',
        password: ''
    })

    async function handleSubmit(){
        let response = await fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: form.username,
                password: form.password
            })
        })
        let { success } = await response.json()
        if(success){
            history.push(`/`)
        }
        if (Platform.OS !== 'web') {
			registerDeviceForNotifications()
		}
    }

    return (
        <View>
            <Text>Login</Text>
            <View>
                <Text>Username</Text>
                <TextInput value={form.username} onChangeText={ username => changeForm({ ...form, username: username })} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput value={form.password} onChangeText={ password => changeForm({ ...form, password: password })} />
            </View>
            <Button  title="Login" onPress={handleSubmit} />
        </View>
    )
}  