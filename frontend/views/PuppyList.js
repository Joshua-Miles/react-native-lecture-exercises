import React, { useState, useEffect } from 'react'
import { Text, View, Image, Button } from 'react-native'
import { DogCard } from './DogCard'
  
export function PuppyList(){

    let [ dogs, setDogs ] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/dogs`)
            .then( res => res.json())
            .then( dogs => setDogs(dogs))
    }, [])

    return (
        <View>
            <Text>Doggos:</Text>
            {dogs.map( dog => (
                <DogCard dog={dog} key={dog.id} />
            ))}
        </View>
    )
}  