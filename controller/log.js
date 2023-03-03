require('dotenv').config();

const { Webhook, MessageBuilder } = require('discord-webhook-node');
//Sends an information message

let log = function (level, topic, title, value) {
    try {
        let hook = new Webhook(process.env.URL_log);
        switch (level) {
            case 1:
                hook.info(`**${topic}**`, title, value);
                break;
            case 2:
                hook.success(`**${topic}**`, title, value);
                break;
            case 3:
                hook.warning(`**${topic}**`, title, value);
                break;
            case 4:
                hook.error(`**${topic}**`, title, value);
                break;
            default:
                console.log("no level");
            // code block
        }
        console.log("ok");
    } catch (error) {
        console.log(error);

    }

}
let user = function (setTitle, nama, fullname, email, wa, url) {
    try {
        let hook = new Webhook(process.env.URL_new_user);
        const embed = new MessageBuilder()
            .setTitle(setTitle)
            .setDescription('Selamat Bergabung Kak :)')
            // .setAuthor('Author here', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
            // .setURL('https://www.google.com')
            .addField(nama, fullname)
            .addField('Email Status', email)
            .addField('Whatsapp Status', wa)
            .setColor('#00b0f4')
            // .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
            .setImage(url)
            .setFooter('Hai Sobat spairum', 'https://cdn.spairum.my.id/img/icon/spairum.png')
            .setTimestamp();
        hook.send(embed);

        console.log("ok")
    } catch (error) {
        console.log(error);
    }

}
module.exports = {
    log,
    user
}
