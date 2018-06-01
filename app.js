'use strict'

var api = require('./api')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('559899786:AAF0icPrHjiA0WZ3-GR4SmnAD-htwYqkHZo')

class PingController extends TelegramBaseController {
	pingHandler($) {
		api.getMZ(function(data) {
			$.sendMessage(data)
		})
	}
	get routes() {
		return {'ping': 'pingHandler'}
	}
}

tg.router
  .when(['ping'], new PingController())