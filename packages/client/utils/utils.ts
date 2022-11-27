export const getGuildImage = (guildId: string, iconHash: string | null) =>
  `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png`;
