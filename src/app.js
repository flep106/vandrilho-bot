'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
//pega os comandos dados pelo BOT
const TextCommand = Telegram.TextCommand
//TOKEN VandrilhoBot
const chatbot = new Telegram.Telegram('882177377:AAEe6LJDv6xvVnp3HbuJTt_JsPJx5OQ18eI')
/*
O método allEventsAction é responsável por enviar a mensagem para o nosso chatbot. Nesse método 
nós temos o parâmetro scope que foi injetado para nós por conta de estendermos a classe 
TelegramBaseController.
Temos também o get routes. Esse é o cara responsável por expor o método allEventsAction 
para o nosso chatbot, ou seja, ajuda nosso chatbot a executar do lado de fora da controller 
o método allEventsAction. Para isto, precisaremos chamar a chave que foi atribuída a ela, 
que é o allEvents. Bora fazer a comunicação do nosso chatbot com a nossa controller:
*/
class EventsController extends TelegramBaseController{
    //metodo que envia mensagem para o BOT
    allEventsAction(scope){
        let msg=`Vectra Consultoria e Serviços - Mensagem enviada por TELEGRAM\n Desenvolvido por Vandrilho`
        scope.sendMessage(msg)
    }
    // expoe o allEventAction para o bot
    get routes(){
        return{
            //mapeamento evento -> Metodo chamado na API node
            'allEvents': 'allEventsAction'
        }
    }
}
//mapeamento comandoBot -> Metodo chamado na API TELEGRAM
chatbot.router
    .when(new TextCommand('/allevents', 'allEvents'), new EventsController())

