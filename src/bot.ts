import { Client } from "discord.js";
import * as commandModules from "./commands";
import config from "./config";

const commands = Object(commandModules);

const default_prefix = "$";

export const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;
  commands[commandName].execute(interaction, client);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(default_prefix)) {
    message.channel.send("You can't use the default prefix! Use a command with the prefix. E.g - $play, $pause, $stop");
  }
});

client.login(config.BOT_TOKEN);
