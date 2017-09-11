var $ = require('../bin/jquery-3.2.1.min.js');
var carousel = require('./carousel.js');
var goTop = require('./senior4.js');
var lazyLoad = require('./nativeLazyLoad.js');

carousel.init($('.carousel'));
goTop.init($('.go-top'));
lazyLoad();