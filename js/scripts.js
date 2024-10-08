// Check if the browser supports notifications
if ('Notification' in window) {
    // Request permission to show notifications
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            // Function to show notification
            /* const notifyUser = () => {
                new Notification('Time to Drink Water!', {
                    body: 'Stay hydrated! Drink a glass of water.',
                    data: { hello: "world" },
                    icon: '/assets/images/water-bottle.png' // Optional: Add an icon URL
                });
            }; */

            // Set interval to show notification every 15 minutes (900000 milliseconds)
            setInterval(() => {
                // Show notification
                new Notification('Time to Drink Water!', {
                    body: 'Stay hydrated! Drink a glass of water.',
                    icon: '/assets/images/water-bottle.png',
                    title: 'Drink Water Reminder'
                });
            }, 900000);


            // Show notification immediately
            // notifyUser();
        }
    });
} else {
    alert('This browser does not support desktop notifications.');
}