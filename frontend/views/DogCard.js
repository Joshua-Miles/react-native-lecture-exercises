import React, { useState } from 'react'

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
       null // Your Code Here
    )
}