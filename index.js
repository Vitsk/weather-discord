const config = require("./botconfig.json");
const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');
const clothes = require('./clothes');

const token = config.token;
const prefix = config.prefix;
const apiKey = config.apiKey;

// `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apiKey}`

bot.on('ready', () => {
  console.log(`Bot is run ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"])
    .then(link => console.log(link));
});

const requestForecast = async (city = 'Kovel') => {
  return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ua&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .catch(res => res.json());
} 


bot.on("message", msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  if (!msg.content.startsWith(`${prefix}forecast`)) return msg.reply('Wrong command');

  const args = msg.content.slice(`>forecast`.length).trim().split(/ +/);
  console.log(args);
	const command = args.shift();

  if (command) {
    requestForecast(command).then(res => {
      msg.reply(`${command}: Сьогодні ${res.weather[0].description}. \n Температура: ${Math.round(res.main.temp)}°C. \n ${clothes(`main: ${res.weather[0].main}`)}`);
    })
      .catch(() => {
        msg.reply('Не можу найти це місто.');
      })
  }
});
bot.login(token);