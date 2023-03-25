module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        console.log("Prête")
        client.user.setStatus('online');
        
        let status_list = [
            "une mappemonde",
            "les joueurs",
            "une émission de géographie",
            ""
            ];
        //let profilepictures_list = [];
        client.user.setActivity("une mappemonde", { type: "WATCHING" });
        setInterval(() => {
            let Random = Math.floor(Math.random() * (status_list.length));
            //let Random2 = Math.floor(Math.random() * (profilepictures_list.length));
            client.user.setActivity(status_list[Random], { type: "WATCHING" });
            //client.user.setAvatar(profilepictures_list[Random2]);
        }, 300000);
    }
}