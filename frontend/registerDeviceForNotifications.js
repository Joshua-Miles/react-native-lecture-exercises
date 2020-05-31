import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

export async function registerDeviceForNotifications() {
    const { status } = {} // <-- Replace this 

    if (status == 'granted') {

        // Get the push token here...

        fetch(`${process.env.REACT_NATIVE_BACKEND_URL}/profile/devices`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                push_token_id: null // <-- ... and send it to your rails server here
            })
        })


        // Android requires notifications to come from a specific "channel"
        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            });
        }
    } 
}