module.exports = {
    name: 'purge',
    description: 'purge messages!',
    async execute(msg: any, args: Array<number>) {
        if (!args[0]) {
            msg.reply("Please enter how many messages to clear!");
        } else if (isNaN(args[0])) {
            msg.reply("Please enter a real number");
        } else if (args[0] < 1) {
            msg.reply("Please Enter a number greater than `0`");
        } else if (args[0] > 100) {
            msg.reply("You cant clear that many messages, please only have numbers less than `100`")
        } else {
            await msg.channel.messages.fetch({ limit: args[0] }).then((messages: any) => {
                    msg.channel.bulkDelete(messages + 1)
                }).catch((err: any) => {
                    console.error(err);
                });
        }
    }
}