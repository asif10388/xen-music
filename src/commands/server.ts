import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder().setName("server").setDescription("Server Info.");

export async function execute(interaction: CommandInteraction) {
  console.log(interaction.guild);

  return interaction.reply(`Server Name: ${interaction.guild?.name}`);
}
