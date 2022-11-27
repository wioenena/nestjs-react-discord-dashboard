import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
  intents: (
    Object.values(IntentsBitField.Flags).filter(
      (a) => typeof a === 'number'
    ) as number[]
  ).reduce((a, b) => a | b),
});

export default client;
