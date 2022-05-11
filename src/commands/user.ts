import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder().setName("user").setDescription("User Info.");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply(`HI: ${interaction.user?.tag.substring(0, interaction.user?.tag.length - 5)} you are a king 👑`);
}
