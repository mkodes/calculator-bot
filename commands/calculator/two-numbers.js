const { evaluate } = require("mathjs");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("two-numbers")
    .setDescription("Perform operations between two different numbers")
    .addIntegerOption((option) =>
      option
        .setName("number1")
        .setDescription("The first number")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("number2")
        .setDescription("The second number")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("operation")
        .setDescription("The operation you would like to perform")
        .setRequired(true)
        .addChoices(
          { name: "Add", value: "+" },
          { name: "Subtract", value: "-" },
          { name: "Multiply", value: "*" },
          { name: "Divide", value: "/" }
        )
    ),
  async execute(interaction) {
    const number1 = await interaction.options.getInteger("number1");
    const number2 = await interaction.options.getInteger("number2");
    const operation = await interaction.options.getString("operation");
    // const addition = new ButtonBuilder()
    //   .setCustomId("addition")
    //   .setLabel("Add")
    //   .setStyle(ButtonStyle.Primary);

    // const subtraction = new ButtonBuilder()
    //   .setCustomId("subtraction")
    //   .setLabel("Subtract")
    //   .setStyle(ButtonStyle.Primary);

    await interaction.reply(
      `${number1} ${operation} ${number2} = ${evaluate(
        String(number1).concat(operation, number2)
      )}`
    );
  },
};
