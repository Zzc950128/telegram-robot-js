'use strict'

var api = require('./api')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const RegexpCommand = Telegram.RegexpCommand
const tg = new Telegram.Telegram('559899786:AAF0icPrHjiA0WZ3-GR4SmnAD-htwYqkHZo')

class PingController extends TelegramBaseController {
	pingHandler($) {
		api.getMZ(function(data) {
			$.sendMessage(data)
		})
	}
	weatherHandle($) {
		api.getWeather(function(data) {
			console.log(data)
			$.sendMessage(data)
		})
	}
	get routes() {
		return {
			'pingCommand': 'pingHandler',
			'weatherCommand': 'weatherHandle'
		}
	}
}

var ping = /ping/i;
var weather = /weather/i;

tg.router
  .when(
  	new RegexpCommand(ping, 'pingCommand'),
  	new RegexpCommand(weather, 'weatherCommand'),
  	new PingController()
  )