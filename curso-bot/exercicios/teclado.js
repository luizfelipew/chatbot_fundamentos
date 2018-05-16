const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard([
    ['🐮 vaca', '🐷 Porco', '🐼 Panda'],
    ['🐓 Galinha','🐣 eu como ovo' ],
    ['🐟 Peixe','🐙 Frutos do mar'],
    ['🍓 Eu sou vegetariano']
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`Qual a bebida que você prefere?`, 
            Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})

bot.hears(['Coca', 'Pepsi'], async ctx => {
    await ctx.reply(`Nossa! Eu tb gosto de ${ctx.match}`)
    await ctx.reply('Qual a sua carne predileta?', tecladoCarne)
})

bot.hears('🐮 vaca', ctx => ctx.reply('É a minha mais que predileta tb') )
bot.hears('🍓 Eu sou vegetariano', 
    ctx => ctx.reply('Muito bom mas eu amo carne babaca!'))
bot.on('text', ctx => ctx.reply('Legal parabens vc não gosta de porra nenhuma'))

bot.startPolling()
    