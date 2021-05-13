module.exports = {
    name: 'info',
    description: 'bot information',
    execute(msg: any, args: any, Discord: any) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FF97D3')
            .setTitle('Bot Info')
            .setURL('https://github.com/Sable-20')
            .setDescription('REPLACE HERE')
            .addField(
                {name: 'Bot Name', value: "TBD"},
                {name: "Uptime", value: "VALUE"}
            )
            .setImage('https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697')
            .setFooter('Made by sable');

        msg.channel.send(newEmbed);
    }
}