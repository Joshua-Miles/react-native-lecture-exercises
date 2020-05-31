import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { MY_IP } from './myIP';

export async function registerDeviceForNotifications() {

    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status == 'granted') {
        let push_token_id = await Notifications.getExpoPushTokenAsync();

        fetch(`http://${MY_IP}:3000/devices`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                push_token_id: push_token_id
            })
        })
        
        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
              name: 'default',
              sound: true,
              priority: 'max',
              vibrate: [0, 250, 250, 250],
            });
          }

    } else {
        alert('Failed to get push token for push notification!');
    }
}