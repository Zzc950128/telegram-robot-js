'use strict'

var api = require('./api')

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const RegexpCommand = Telegram.RegexpCommand
const TextCommand = Telegram.TextCommand
//const tg = new Telegram.Telegram('559899786:AAF0icPrHjiA0WZ3-GR4SmnAD-htwYqkHZo')
//617336269:AAGAAmLZFsJ1fgSS9FvgKtXDbXvb8sYiLWs
const tg = new Telegram.Telegram('617336269:AAGAAmLZFsJ1fgSS9FvgKtXDbXvb8sYiLWs')
class PingController extends TelegramBaseController {
	pingHandler($) {
		api.getMZ(function(data) {
			$.sendMessage(data)
		})
	}
	get routes() {
		return {
			'pingCommand': 'pingHandler'
		}
	}
}
class WeatherController extends TelegramBaseController {
	weatherHandle($) {
		api.getWeather(function(data) {
			$.sendMessage(data)
		})
	}
	get routes() {
		return {
			'weatherCommand': 'weatherHandle'
		}
	}
}
class PhotoController extends TelegramBaseController {
	photoHandler($) {
		api.getMZ(function(data) {
			$.sendMessage(data)
		})
	}
	get routes() {
		return {
			'photoCommand': 'photoHandler'
		}
	}
}

var ping = /ping/i;
var weather = /weather/i;

tg.router
  .when( new RegexpCommand(ping, 'pingCommand'), new PingController() )
  .when( new RegexpCommand(weather, 'weatherCommand'), new WeatherController() )
  .when( new TextCommand('/photo', 'photoCommand'), new PhotoController() )
