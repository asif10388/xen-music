import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder().setName("ping").setDescription("Pings the bot.");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("COMMUNISM IS LOVE, BUT NOTHING IS MORE LOVELY");
}
