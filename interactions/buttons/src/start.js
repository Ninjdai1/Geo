const { EmbedBuilder } = require("discord.js");

module.exports = {
    async execute(interaction, client) {
        const players = interaction.message.components[0].components[0].customId.split('-');
        if(!players.indexOf(interaction.user.id) == 0) return interaction.reply({ content: localetext.forbidden, ephemeral: true });
        await interaction.update({ components: [] });
        let playermsg = "";
        players.forEach(p => {
            playermsg+=`<@${p}>, `
        });
        playermsg+=" game is starting soon !";
        const startMSG = await interaction.followUp({ content: playermsg, embeds: [ new EmbedBuilder().setImage('https://media.discordapp.net/attachments/1089122456792465519/1089122794081628160/AcidicCreepyKitty-size_restricted.gif?width=234&height=132') ], fetchReply: true });
        setTimeout(async () => {
            await startMSG.delete()
        }, 30000);
    }
}

const text = {
    'en-GB': {
        forbidden: "You cannot use this button !",
    },
    'en-US': {
        forbidden: "You cannot use this button !",
    },
    'fr': {
        forbidden: "Vous ne pouvez pas utiliser ce bouton !",
    }
}
