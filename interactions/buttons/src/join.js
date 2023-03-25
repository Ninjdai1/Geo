const { ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    async execute(interaction, client) {
        await interaction.deferUpdate({});
        const localetext = interaction.locale in Object.keys(text) ? text[interaction.locale] : text['en-GB'];
        const players = interaction.message.components[0].components[0];
        if(players.customId.split('-').indexOf(interaction.user.id)!=-1){
            await interaction.editReply({});
            return interaction.followUp({ content: localetext.alreadyjoined, ephemeral: true });
        };

        const row1 = new ActionRowBuilder()
            .setComponents([
                new ButtonBuilder(players.data)
                    .setCustomId(players.customId+`-${interaction.user.id}`)
            ]);
        console.log(interaction.message.embeds[0].data)
        const embed = new EmbedBuilder(interaction.message.embeds[0].data)
            .setDescription(interaction.message.embeds[0].data.description + `\n<@${interaction.user.id}>`);
        
        await interaction.editReply({ components: [row1, row2], embeds: [embed] });
        await interaction.followUp({ content: localetext.joined, ephemeral: true });
    }
}

const text = {
    'en-GB': {
        alreadyjoined: "You're already in the player list !",
        joined: "You have been added to the player list !"
    },
}

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