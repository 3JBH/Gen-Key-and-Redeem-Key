if (command === "genkey") { // your prefered command style
    axios.get('https://keyapi.keykeyapicode.repl.co/getkey').then(async res => {
        var data = res.data
        let KeyGen = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setDescription('Your key is: '
                '```' + data.key + '```')
	    .setFooter('API by Stiizzy Cat')
        message.channel.send("", KeyGen) // for DiscordJS
    })
}

if (command === "redeem") { // your prefered command style
	var key = args.join(" ") //input key varable
	if (!key) return message.reply("This key is invalid")
	axios.get(`https://keyapi.keykeyapicode.repl.co/checkkey/${key}`).then(async res => { /// checks for key
		var data = res.data
		if (res.data.status === "Key-Found") {
			let ResponseGood = new Discord.MessageEmbed()
				.setColor('#00FF00')
				.setDescription(`Key was Validated, Giving you the role!`)
				.setFooter('API by Stiizzy Cat')
			message.channel.send("", ResponseGood)
			/// add role Giving function here
		} else {
			let ResponseBad = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setDescription(`Invalid Key!`)
				.setFooter('API by Stiizzy Cat')
			message.channel.send("", ResponseBad)
		}
	})
}
