const { Client, Attachment } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!cantina') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/TKHOATK.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);
