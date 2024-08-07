require("dotenv").config()
const Telebot = require("./app/botTele")

const token = "7027028001:AAFrklJ59vO6jR0JHdXx3yv09RxHDeBoBXM"
const options = {
    polling: true
}

console.log("starting cuybot...")
const telebot = new Telebot(token, options)

const main = () => {
    console.log("checking feature...")
    telebot.getHelp()
    telebot.getSticker()
    telebot.getGreeting()
    telebot.getFollow()
    telebot.getQuotes()
    telebot.getNews()
    telebot.getQuake()
    telebot.getCommands()
    telebot.getJoke()
    telebot.getPhotoRandom()
    console.log('feature ready!')
}
main()
console.log("bot is ready now!")