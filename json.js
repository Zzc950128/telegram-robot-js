// var str = {"HeWeather6":[{"basic":{"cid":"CN101010100","location":"北京","parent_city":"北京","admin_area":"北京","cnty":"中国","lat":"39.90498734","lon":"116.4052887","tz":"+8.00"},"update":{"loc":"2018-06-04 09:49","utc":"2018-06-04 01:49"},"status":"ok","daily_forecast":[{"cond_code_d":"100","cond_code_n":"100","cond_txt_d":"晴","cond_txt_n":"晴","date":"2018-06-04","hum":"33","mr":"23:52","ms":"09:28","pcpn":"0.0","pop":"0","pres":"1009","sr":"04:47","ss":"19:40","tmp_max":"35","tmp_min":"21","uv_index":"8","vis":"20","wind_deg":"229","wind_dir":"西南风","wind_sc":"4-5","wind_spd":"28"},{"cond_code_d":"101","cond_code_n":"101","cond_txt_d":"多云","cond_txt_n":"多云","date":"2018-06-05","hum":"13","mr":"10:45","ms":"10:24","pcpn":"0.0","pop":"0","pres":"1002","sr":"04:47","ss":"19:40","tmp_max":"37","tmp_min":"24","uv_index":"8","vis":"20","wind_deg":"199","wind_dir":"西南风","wind_sc":"4-5","wind_spd":"26"},{"cond_code_d":"101","cond_code_n":"101","cond_txt_d":"多云","cond_txt_n":"多云","date":"2018-06-06","hum":"12","mr":"00:24","ms":"11:23","pcpn":"0.0","pop":"0","pres":"1002","sr":"04:47","ss":"19:41","tmp_max":"36","tmp_min":"25","uv_index":"8","vis":"20","wind_deg":"189","wind_dir":"南风","wind_sc":"1-2","wind_spd":"4"}]}]}

// var max = str.HeWeather6[0].daily_forecast[0].tmp_max
// var min = str.HeWeather6[0].daily_forecast[0].tmp_min

// var back = "最高气温是: " + max + "度,最低气温是: " + min + "度."

// console.log(max + " " + min)
// console.log(back)
'use strict'

const superagent = require('superagent')
// var http = require('http')
const cheerio = require('cheerio')

var weather = "https://free-api.heweather.com/s6/weather/forecast?location=%E5%8C%97%E4%BA%AC&key=59eece16cf734dc8805729c68ae68549"

function changeWeather(res) {
	var str = JSON.parse(res)
	var max = str.HeWeather6[0].daily_forecast[0].tmp_max
	var min = str.HeWeather6[0].daily_forecast[0].tmp_min
	var back = "最高气温是: " + max + "度,最低气温是: " + min + "度."
	return back
}

function getWeather(callback) {
	superagent
		.get(weather)
		.end(function(err, res) {
			var str = changeWeather(res.text)
		})
}

getWeather()
