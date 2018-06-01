'use strict'

const superagent = require('superagent')
// var http = require('http')
const cheerio = require('cheerio')

var url = 'http://www.kmeitu.com'



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
// function getMZ() {
// 	superagent
// 		.get(url)
// 		.end(function(err, res) {
// 			var array = getPicture(res.text)
// 			console.log(array)
// 		})
// }
// getMZ()
exports.getMZ = function(callback) {
	superagent
		.get(url)
		.end(function(err, res) {
			var array = getPicture(res.text)
			callback(array) 
		})
}