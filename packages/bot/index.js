"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: Object.values(discord_js_1.IntentsBitField.Flags).filter((a) => typeof a === 'number').reduce((a, b) => a | b),
});
exports.default = client;
