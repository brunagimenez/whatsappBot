const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, Buttons } = require('whatsapp-web.js');
const { authEmail, authPassword } = require('./auth/login');
    
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR Code gerado. Escaneie-o para autenticar.');
});

client.on('ready', () => {
    console.log('Cliente está pronto!');
});

client.on('message', async (message) => {
    await authEmail(message);

    await message.reply(
        new Buttons('Confirme seu email:', [
            {
                buttonId: 'customId',
                buttonText: {
                    displayText: 'button1'
                },
                type: 1
            },
            {
                buttonId: 'n3XKsL',
                buttonText: {
                    displayText: 'button2'
                },
                type: 1
            },
        ])
    );
    console.log(message);
});

client.initialize();