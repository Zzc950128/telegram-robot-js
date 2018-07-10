'use strict'

// const Promise = require('bluebird');
// Promise.config({
//   cancellation: true
// });

const TelegramBot = require('node-telegram-bot-api');

//const token = '559899786:AAF0icPrHjiA0WZ3-GR4SmnAD-htwYqkHZo';
const token = '617336269:AAGAAmLZFsJ1fgSS9FvgKtXDbXvb8sYiLWs';

const bot = new TelegramBot(token, {polling: true});

/*
bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];
	bot.sendMessage(chatId, resp);
});
*/

bot.on('message', (msg) => {
	const new_chat_member = !!msg.new_chat_member || !!msg.new_chat_members;
	const chatId = msg.chat.id;
	const messageId = msg.message_id;
	if(new_chat_member) {
		bot.deleteMessage(chatId, messageId)
	}
	//bot.sendMessage(chatId, 'Received your message');
});
