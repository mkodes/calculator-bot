const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say hello to another user!")
    .addUserOption((option) =>
      option
        .setName("input")
        .setDescription("The user you want to say hello to")
        .setRequired(true)
    ),
  async execute(interaction) {
    const input = interaction.options.getUser("input");

    await interaction.reply(
      `${interaction.user.displayName} said hi to ${input.displayName}!`
    );
  },
};
