import React, { useEffect } from 'react';
import { Router } from './Router'
import { Login } from './views/Login';
import { PuppyList } from './views/PuppyList';
import { useHistory, Route } from 'react-router';
import { registerDeviceForNotifications } from './registerDeviceForNotifications';
import { Platform } from 'react-native';

export default function App() {
	return (
		<Router>
			<Index />
		</Router>
	);
}

// I'm using a seperate component here so that I can access the history object from NativeRouter
function Index() {

	const history = useHistory()

	useEffect(() => {
		fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/profile`, {
			credentials: 'include',
		})
			.then(res => res.json())
			.then(loggedInUser => {
				if (loggedInUser === null) {
					history.push('/login') // <-- If the user is not logged in, redirect them to the login page
				} else {
					if (Platform.OS != 'web') {
						registerDeviceForNotifications()
					}
					history.push('/')
				}
			})
	}, [])

	return (
		<>
			<Route exact path="/login" component={Login} />
			<Route exact path="/" component={PuppyList} />
		</>
	)
}