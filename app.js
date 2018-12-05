const { Client, Attachment } = require('discord.js');
const fetch = require('node-fetch');

const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!cantina') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i1.wp.com/www.ondevamosjantar.com/wp-content/uploads/2015/05/cantina-lx-lx-factory-alcantara-lisboa-restaurante-grupos.jpg');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    } else if (message.content === '!rquote') {
        fetch('http://quotes.stormconsultancy.co.uk/random.json')
        .then((resp) => resp.json())
        .then(function(data) {
            let quote = data.quote;
            let author = data.author;

            message.channel.send(`${message.author}, "${quote}" - ${author}`);
        });
    }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);
