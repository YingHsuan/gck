var express = require('express');
var router = express.Router();
const request = require('request');
const url = 'https://www.allbeauty.com.tw/GoldPrice/'

/* GET home page. */
router.get('/', function (req, res, next) {
  request(url, function (err, resc, body) {
    const cheerio = require('cheerio')
    // 把 body 放進 cheerio 準備分析
    const $ = cheerio.load(body)
    var _result = []
    $("#ListMetalPrice table tbody tr").each(function (i, elem) {
      var _object1 = [];
      $(this).children().each(function (index, value) {
        if ($(this).text() != "") {
          _object1.push($(this).text());
        }
      })
      _result.push(_object1);
    });
    res.render('index', { result: _result });
  })
});

module.exports = router;
