module.exports = {
    name: 'kick',
    description: 'Kick a menber',
    execute(msg: any, args: any) {
        if (msg.member.permissions.has("KICK_MEMBERS")) {
            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.members.resolve(user);

                if (member) {
                    user
                        .kick(`Kicked by ${msg.author} for ${args[1]}`)
                        .then(() => {
                            msg.channel.send(`Kicked: ${user.tag}`);
                        })
                        .catch((err: any) => {
                            msg.channe.send("Unable to kick member");
                            console.error(err);
                        });
                }
            } else {
                msg.channel.send("You need to mention a user to kick");
            }
        } else {
            msg.channel.send("You are missing the **KICK_MEMBERS** permission");
        }
    }
}