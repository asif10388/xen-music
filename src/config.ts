import dotenv from "dotenv";

dotenv.config();

const { APPLICATION_ID, BOT_TOKEN, GUILD_ID } = process.env;

if (!APPLICATION_ID || !BOT_TOKEN || !GUILD_ID) {
  throw new Error("Missing environment variables");
}

const config: Record<string, string> = {
  APPLICATION_ID,
  BOT_TOKEN,
  GUILD_ID,
};

export default config;
