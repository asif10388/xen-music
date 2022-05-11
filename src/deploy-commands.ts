import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

import * as commandModules from "./commands";

import config from "./config";

type Command = {
  data: unknown;
};

const commands = [];

for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.data);
}

const rest = new REST({ version: "9" }).setToken(config.BOT_TOKEN);

rest
  .put(Routes.applicationGuildCommands(config.APPLICATION_ID, config.GUILD_ID), { body: commands })
  .then(() => {
    console.log("Successfully deployed commands!");
  })
  .catch((err) => {
    console.error(err);
  });