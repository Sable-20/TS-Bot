module.exports = {
    name: 'kick',
    description: 'Kick a menber',
    execute(msg: any, args: any) {
        if (msg.member.permissions.has("KICK_MEMBERS")) {
            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.members.cache.get(user.id);
                if (!args[1]) {
                    member.kick(`${user.id} Kicked by ${msg.author}`).catch((err: any) => {
                        console.error(err);
                    });
                }
                member.kick(`${user.id} Kicked for ${args[1]} by ${msg.author}`).catch((err: any) => {
                    console.error(err);
                });
            } else {
                msg.channel.send("You need to mention a user to kick");
            }
        } else {
            msg.channel.send("You are missing the **KICK_MEMBERS** permission");
        }
    }
}