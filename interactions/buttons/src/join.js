module.exports = {
    async execute(interaction, client) {
        await interaction.deferUpdate({});
        const localetext = interaction.locale in Object.keys(text) ? text[interaction.locale] : text['en-GB'];
        const players = interaction.message.components[0].components[0].customId.split('-');
        if(players.indexOf(interaction.user.id)!=-1){
            await interaction.editReply();
            return interaction.followUp({ content: localetext.alreadyjoined, ephemeral: true });
        }
        
        await interaction.editReply({ components: interaction.message.components, embeds: interaction.message.embeds  });
        await interaction.followUp({ content: localetext.joined, ephemeral: true });
    }
}

const text = {
    'en-GB': {
        alreadyjoined: "You're already in the player list !",
        joined: "You have been added to the player list !"
    },
}