const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const nome = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${nome}!\nAvise se precisar de /ajuda`)
})

bot.command('ajuda', ctx => ctx.reply('/ajuda: vou mostrar as opções'
    + '\n/ajuda2: para testar via hears'
    + '\n/op2: Opção genéria'
    + '\n/op3: Outra opção genérica qualquer'))

// dessa forma parece com o command só que tem que colocar a barra
bot.hears('/ajuda2', ctx => ctx.reply('Eu tb consigo capturar comandos'
        + ', mas utiliza a /ajuda mesmo' ))

// respostas padrao 
bot.hears(/\/op\d+/i, ctx => ctx.reply('Respostas padrão para comandos genéricos'))

bot.startPolling()