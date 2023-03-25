const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
        .setNameLocalizations({
            'en-GB': 'play',
            'fr': 'play',
        })
		.setDescription('Start a game')
        .setDescriptionLocalizations({
            'en-GB': 'Start a game',
            'fr': 'Lancer une partie',
        }),
	async execute(interaction) {
        await interaction.deferReply();
        const localetext = interaction.locale in Object.keys(text) ? text[interaction.locale] : text['en-GB'];
        const playEMBED = new EmbedBuilder()
            .setTitle(localetext.title)
            .setColor('Green')
            .setDescription(localetext.description)
        const btns = new ActionRowBuilder()
            .setComponents([
                new ButtonBuilder()
                    .setCustomId(`startGame_trivia_${interaction.user.id}`)
                    .setLabel('Trivia')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('⁉️'),
                new ButtonBuilder()
                    .setCustomId(`startGame_capital_${interaction.user.id}`)
                    .setLabel('Guess the capital')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🏦'),
                new ButtonBuilder()
                    .setCustomId(`startGame_country_${interaction.user.id}`)
                    .setLabel('Guess the country')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🗺️'),
                new ButtonBuilder()
                    .setCustomId(`startGame_flag_${interaction.user.id}`)
                    .setLabel('Guess the flag')
                    .setStyle(ButtonStyle.Success)
                    .setEmoji('🏁'),
            ])
        await interaction.editReply({ embeds: [playEMBED], components: [ btns ] })
    }
};

const text = {
    'en-GB': {
        title: 'Start a game',
        description: 'Choose the game you want to play using buttons below !'
    },
    'en-US': {
        title: 'Start a game',
        description: 'Choose the game you want to play using buttons below !'
    },
    'fr': {
        title: 'Lancer une partie',
        description: 'Choisissez un jeu via les boutons ci-dessous !'
    },
}