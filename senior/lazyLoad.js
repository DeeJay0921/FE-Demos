// 瀑布流 懒加载 ajax

var LazyLoad = (function () {
    function waterFallLazyLoad ($ct) {
        this.$ct = $ct;
        this.init();
        this.bind();

    }
    waterFallLazyLoad.prototype.init = function () {
        this.currentPage = 0;
        this.waterFallArr = [];
        this.waterFallCol = parseInt(this.$ct.width() / this.$ct.find('.item').outerWidth());
        this.clock = undefined;
        for (var i = 0; i < this.waterFallCol; i ++) {
            this.waterFallArr[i] = 0;
            console.log(this.waterFallArr)
        }
        this.getData();
    }
    waterFallLazyLoad.prototype.bind = function () {
        var self = this;
        $(window).on('scroll',function () {
            if (self.clock) {
                clearTimeout(self.clock);
            }
            self.clock = setTimeout(function () {
                if (self.checkShow($('#load'))) {
                    self.getData();
                }
            },300)
        })
    }

    waterFallLazyLoad.prototype.getData= function() {
        var self = this;
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            method: 'get',
            data: {
                app_key: 1271687855,
                page: self.currentPage,
                num: 20,
            }
        }).done(function (ret) {
            if (ret.status.code == 0) {
                self.render(ret.data);
                self.currentPage++;
            }
        })
    }
    waterFallLazyLoad.prototype.render = function (arr) {
        var self = this;
        $(arr).each(function (i,e) {
            self.html = '';
            self.html += '<li class="item">';
            self.html += '<a href=" ' +e.url + ' " class="link"><img src=" '+e.img_url +' "></a>'
            self.html += '<h4 class="header">' +e.short_name+ '</h4>';
            self.html += '<p class="desp">'+e.short_intro+'</p></li>';
            self.$node = $(self.html);
            self.$node.find('img').on('load',function () {
                self.$ct.append(self.$node);
                self.waterFall(self.$node);
            })
        })
    }
    waterFallLazyLoad.prototype.waterFall = function ($node) {
        var self = this;
        self.minHeight = Math.min.apply(null,self.waterFallArr);
        // console.log(self.waterFallArr)
        self.minHeightIndex = self.waterFallArr.indexOf(self.minHeight);
        // console.log('index' + self.minHeightIndex)
        $node.css({
            left: self.minHeightIndex * $node.outerWidth(true),
            top: self.minHeight,
        })
        console.log(self.minHeightIndex)
        console.log(self.minHeight)
        self.waterFallArr[self.minHeightIndex] += $node.outerHeight(true);
        this.$ct.height(Math.max.apply(null,self.waterFallArr));
    }
    waterFallLazyLoad.prototype.checkShow = function($node) {
        var self = this;
        self.windowHeight = $(window).height();
        self.scrollTop = $(window).scrollTop();
        self.nodeOffsetTop = $node.offset().top;

        if (self.nodeOffsetTop < self.windowHeight + self.scrollTop + 300) {
            return true;
        }
        return false;
    }
    return {
        init: function ($ct) {
            $ct.each(function (i,e) {
                new waterFallLazyLoad($(e))
            })
        }
    }
})();
LazyLoad.init($('#pic-ct'));
// waterFallLazyLoad($('#pic-ct'),$('.item'));