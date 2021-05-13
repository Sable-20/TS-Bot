module.exports = {
    name: 'ban',
    description: 'Ban a member',
    execute(msg: any, args: any) {
        if (msg.member.permissions.has("BAN_MEMBERS")) {
            const user = msg.mentions.users.first();

            if (user) {
                const member = msg.guild.members.cache.get(user.id);
                if (!args[1]) {
                    member.ban(`${user.id} Banned by ${msg.author}`).catch((err: any) => {
                        console.error(err);
                    });
                }
                member.ban(`${user.id} Banned for ${args[1]} by ${msg.author}`).catch((err: any) => {
                    console.error(err);
                });
            } else {
                msg.channel.send("You need to mention a user to kick");
            }
        } else {
            msg.channel.send("You are missing the **BAN_MEMBERS** permission");
        }
    }
}