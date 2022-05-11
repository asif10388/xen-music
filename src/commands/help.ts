import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder().setName("help").setDescription("Help command.");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("HOW CAN I NOT HELP YOU NIGGS?");
}
