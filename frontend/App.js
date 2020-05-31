import React, { useEffect } from 'react';
import { NativeRouter, useHistory } from 'react-router-native'
import { Login } from './views/Login';
import { PuppyList } from './views/PuppyList';

export default function App() {
	return (
		<NativeRouter>
			<Index /> 
		</NativeRouter>
	);
}

// I'm using a seperate component here so that I can access the history object from NativeRouter
function Index(){

	const history = useHistory()

	useEffect(() => {
		fetch(`http://${process.env.BACKEND_URL}/profile`, {
			credentials: 'include',
		})
			.then( res => res.json() )
			.then( loggedInUser => {
				if(loggedInUser === null){
					history.push('/login') // <-- If the user is not logged in, redirect them to the login page
				}
			})
	}, [])

	return (
		<>
			<Route exact path="/login" component={Login}/>
			<Route exact path="/" component={PuppyList} />
		</>
	)
}