import React, { useState } from 'react'
import { Text, View, Image, Button } from 'react-native'

export const DogCard = (props) => {

    const [ dog, setDog ] = useState(props.dog)

    const like = () => {
        setDog({ ...dog, likes: dog.likes + 1 })
        fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/dogs/${dog.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likes: dog.likes + 1
            })
        })
    }

    return (
        <View>
            <Text>{dog.name}</Text>
            <Image resizeMode="contain" style={{ height: 100, width: 'auto' }} source={{ uri: dog.image_url }} />
            <Text>Likes: {dog.likes}</Text>
            <Button title="Like" onPress={() => like()} />
        </View>
    )
}