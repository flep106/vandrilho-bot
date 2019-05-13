
process.env.NTBA_FIX_319 = 1;
/*
node-telegram-bot-api deprecated Automatic enabling of cancellation of promises is deprecated.
In the future, you will have to enable it yourself.
See https://github.com/yagop/node-telegram-bot-api/issues/319.
*/
const TelegramBot = require( `node-telegram-bot-api` )
const TOKEN = '882177377:AAEe6LJDv6xvVnp3HbuJTt_JsPJx5OQ18eI'
const bot = new TelegramBot( TOKEN, { polling: true } )


bot.on('new_chat_members', (msg) =>{
    console.log(msg)
    bot.sendMessagee(msg.chat.id, `Olá ${msg.from.first_name},  bem vindo ao grupo de SDM, qualquer dúvida SEMPRE procurar Sandro, nunca fale com Vandrilho :D.`)
})

