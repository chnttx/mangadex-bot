const { SlashCommandBuilder } = require('discord.js');
const { axios } = require('discord.js');
// const { request } = require('undici');
const baseUrl = 'https://api.mangadex.org';
// const title = '5Toubun no Hanayome';

module.exports = {
  data : new SlashCommandBuilder()
    .setName('manga')
    .setDescription('5toubun'),
 
  async execute(interaction) {
    let title = '5Toubun no Hanayome';
    const resp = await axios.get(`${baseUrl}/manga`, {
      params: {
        title: title
      }
    });
    let connectionSuccess = resp.data.result;
    console.log(connectionSuccess);
    await interaction.reply(resp.data.result);
  },
};

