module.exports = {
    name: 'github',
    description: 'Get the github link for the bot',
    execute(msg: any, args?: string[] | number) {
        msg.channel.send("https://github.com/Sable-20");
    }
}