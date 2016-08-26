'use strict';
var w = require('wareki');
var jaCodeMap = require('jaCodeMap');
var Iconv = require('iconv').Iconv;

(function(util){
    var jis2utf8 = new Iconv('SHIFT_JIS', 'UTF-8//TRANSLIT//IGNORE');
    var utf82jis = new Iconv('UTF-8//TRANSLIT//IGNORE', 'SHIFT_JIS');
    var zeroPadding = function(number, length){
        return (Array(length).join('0') + number).slice(-length);
    }
    util.tojis = function(data){
        return utf82jis.convert(data).toString("binary")
    }
    util.fromjis = function(data){
        return jis2utf8.convert(data).toString()
    }
    util.seireki2wareki = function(seireki){
        var d = seireki.split('-');
        var wareki = w.toWareki(d[0])
        return [
            zeroPadding(wareki[1],2),
            zeroPadding(d[1],2),
            zeroPadding(d[2],2)
        ].join('')
    }
    util.wareki2seireki = function(wareki, reki){
        reki = reki ? reki : 'H';
        return [
            w.fromWareki(reki, wareki.slice(0, 2)),
            wareki.slice(2, 4),
            wareki.slice(4, 6)
        ].join('-')
    }
    util.han2zen = function(han){
        return jaCodeMap.h2f(han.trim())
    }
    util.zen2han = function(zen){
        return jaCodeMap.f2h(zen)
    }
    util.padding_l = function(data, c, max){
        var result = "";
        var count = max - data.length
        for(var i = 0; i < count; ++i){
            result += c.toString()
        }
        return result + data
    }
    util.padding_r = function(data, c, max){
        var result = "";
        var count = max - data.length
        for(var i = 0; i < count; ++i){
            result += c.toString()
        }
        return data + result
    }
    util.fmt_n = function(data, max){
        return util.padding_l(data.toString(), '0', max).slice(0, max)
    }
    util.fmt_c = function(data, max){
        return util.padding_r(util.zen2han(data.toString()), ' ', max).slice(0, max)
    }
}(exports))
