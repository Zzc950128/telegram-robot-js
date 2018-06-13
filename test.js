'use strict'

// const Promise = require('bluebird');
// Promise.config({
//   cancellation: true
// });

const TelegramBot = require('node-telegram-bot-api');

const token = '559899786:AAF0icPrHjiA0WZ3-GR4SmnAD-htwYqkHZo';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];
	bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
	console.log(msg)
	const chatId = msg.chat.id;
	// bot.sendMessage(chatId, 'Received your message');
});
