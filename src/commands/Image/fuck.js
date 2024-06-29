const {
    EmbedBuilder,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
} = require("discord.js");
//const { Random } = require("something-random-on-discord");

module.exports = {
    name: "fuck",
    category: "Image",
    aliases: ["sex"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
        const fuckss = [
            "https://media1.tenor.com/m/Dn2rJPJ32FcAAAAC/vegeta-bait.gif",
            "https://media1.tenor.com/m/Dn2rJPJ32FcAAAAC/vegeta-bait.gif",
            "https://media1.tenor.com/m/Dn2rJPJ32FcAAAAC/vegeta-bait.gif",
            "https://media1.tenor.com/m/Dn2rJPJ32FcAAAAC/vegeta-bait.gif",
            "https://media1.tenor.com/m/Dn2rJPJ32FcAAAAC/vegeta-bait.gif",
        ];

        const fuckRandom = Math.floor(Math.random() * fuckss.length);
        const taggedUser = message.mentions.members.first();
        if (!taggedUser) {
            return message.channel.send("Please mention somebody to fuck!");
        }
        let embed = new EmbedBuilder()
            .setImage(`${fuckss[fuckRandom]}`)
            .setColor("#2f3136")
            .setDescription(
                `@everyone !! ${message.author.username} is a pervert and wanted to do something HARAM TO ${taggedUser.user.username}!`,
            )
            .setFooter({
                text: "Requested by " + message.author.username,
                iconURL: message.author.displayAvatarURL({ dynamic: true }),
            });

        message.channel.send({ embeds: [embed] });
    },
};
