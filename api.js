'use strict'

const superagent = require('superagent')
// var http = require('http')
const cheerio = require('cheerio')

var url = 'http://www.kmeitu.com'

var weather = "https://free-api.heweather.com/s6/weather/forecast?location=%E5%8C%97%E4%BA%AC&key=59eece16cf734dc8805729c68ae68549"

function getPicture(html) {
	var array = []
	var $ = cheerio.load(html)
	var items = $('.lz-img')
	items.each(function(index, item) {
		var url = $(this).attr('data-src').replace(/\s+/g, '')
		array.push(url)
	})
	return array[Math.floor(Math.random()*array.length)]
}

function changeWeather(res) {
	// var str = JSON.parse(res)
	var str = res
	var max = str.HeWeather6[0].daily_forecast[0].tmp_max
	var min = str.HeWeather6[0].daily_forecast[0].tmp_min
	var back = "最高气温是: " + max + "度,最低气温是: " + min + "度."
	return back
}

exports.getMZ = function(callback) {
	superagent
		.get(url)
		.end(function(err, res) {
			var array = getPicture(res.text)
			callback(array) 
		})
}

exports.getWeather = function(callback) {
	superagent
		.get(weather)
		.end(function(err, res) {
			var str = changeWeather(res)
			callback(str)
		})
}

