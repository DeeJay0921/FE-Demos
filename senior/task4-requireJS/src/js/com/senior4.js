// 回到顶部
define(['jquery'],function ($) {
    var GoTop2 = (function () {
        function GoTop ($ct) {
            this.$ct = $ct;
            this.bind();
        }

        GoTop.prototype.bind = function () {
            var self = this;
            $(window).on('scroll',function () {
                self.windowScrollTop = $(window).scrollTop();
                if (self.windowScrollTop > 200) {
                    self.$ct.css({
                        display: 'block'
                    })
                }
                else if (self.windowScrollTop < 200) {
                    self.$ct.css({
                        display: 'none'
                    })
                }
            })
            self.$ct.on('click',function () {
                $(window).scrollTop(0);
            })
        }
        return {
            init: function ($ct) {
                new GoTop($ct);
            }
        }
    })();
    return GoTop2;
})


