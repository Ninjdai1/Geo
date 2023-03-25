const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    async execute(interaction, client) {
        const localetext = interaction.locale in Object.keys(text) ? text[interaction.locale] : text['en-GB'];
        if(!interaction.customId.split('_')[2] == interaction.user.id) return interaction.reply({ content: localetext.forbidden, ephemeral: true });
        await interaction.deferUpdate();
        const row1 = new ActionRowBuilder()
        switch (interaction.customId.split('_')[1]) {
            case 'trivia':
                const triviaEmbed = new EmbedBuilder()
                    .setTitle("Trivia")
                    .setColor('DarkGreen')
                    .setDescription(localetext.triviaDesc+`\n<@${interaction.user.id}>`)
                
                dataBTN.setCustomId(`${interaction.user.id}`)
                row1.setComponents([dataBTN])

                await interaction.editReply({ embeds: [triviaEmbed], components: [row1, row2] })
                break;
        }
    }
}

const text = {
    'en-GB': {
        forbidden: "You cannot use this button !",
        triviaDesc: "Trivia is a quiz whose solution you must find as soon as possible !\nPress START when ready or give people time to join using the JOIN button below !\n\n__Players :__",
    },
    'en-US': {
        forbidden: "You cannot use this button !",
        triviaDesc: "Trivia is a quiz whose solution you must find as soon as possible !\nPress START when ready or give people time to join using the JOIN button below !\n\n__Players :__",
    },
    'fr': {
        forbidden: "Vous ne pouvez pas utiliser ce bouton !",
        triviaDesc: "Trivia est un quiz dont vous devez trouver la solution le plus vite possible !\nAppuie sur START une fois prêt, ou laisse d'autres personnes rejoindre la partie via le bouton JOIN !\n\n__Participants:__",
    }
}

const dataBTN = new ButtonBuilder()
    .setLabel('---------------------------')
    .setStyle(ButtonStyle.Secondary)
    .setDisabled(true)

const startBTN = new ButtonBuilder()
    .setLabel('START')
    .setStyle(ButtonStyle.Success)
    .setEmoji('⏯️')
    .setCustomId('start')

const joinBTN = new ButtonBuilder()
    .setLabel('JOIN')
    .setStyle(ButtonStyle.Primary)
    .setEmoji('🌐')
    .setCustomId('join')

const row2 = new ActionRowBuilder()
    .setComponents([ startBTN, joinBTN ])