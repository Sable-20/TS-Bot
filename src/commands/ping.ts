module.exports = {
    name: 'ping',
    description: 'Ping pong',
    execute(msg: any, args: any) {
        msg.channel.send('Pong!');
    }
}