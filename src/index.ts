import Discord from 'discord.js';
import fs from 'fs';
const { token, prefix } = require('./config.json');

const client = new Discord.Client();

// @ts-ignore
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require('./commands/' + file);

    // @ts-ignore
    client.commands.set(commands.name, command);
}

client.once('ready', (): void => {
    console.log("Bot is online");
});


client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args: string[] = msg.content.slice(prefix.length).split(/ +/);
    // @ts-ignore
    const command: string = args.shift().toLowerCase();

    // @ts-ignore
    if (!client.commands.has(command)) return;

    try {
        // @ts-ignore
        client.commands.get(command).execute(msg, args);
    } catch (err) {
        console.log(err);
        msg.reply("There was an error executing the command").then(r => { return });
    }
});


client.login(token).then(r => { return });