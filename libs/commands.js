const prefix = "#"

const commands = {
    quote: new RegExp(`^${prefix}quote$`),
    news: new RegExp(`^${prefix}news$`),
    greeting: new RegExp(`${prefix}^halo$`),
    quake: new RegExp(`^${prefix}quake$`),
    help: new RegExp(`^${prefix}help$`),
    follow: new RegExp(`^${prefix}follow(.+)`),
    commands: new RegExp(`^${prefix}commands$`),
    emoji: new RegExp(`^${prefix}emoji$`),
    joke: new RegExp(`^${prefix}joke$`),
    photo: new RegExp(`${prefix}photo`)
}

module.exports = commands

