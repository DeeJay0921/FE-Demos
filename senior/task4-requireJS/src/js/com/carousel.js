//轮播
define(['jquery'],function ($) {
    var Carousel2 = (function () {
        function Carousel ($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
            this.run();
        }
        Carousel.prototype.init = function () {
            this.$imgct = this.$ct.find('.img-ct');
            this.$imgs = this.$ct.find('.img-ct>li');
            //获取宽度和个数
            this.imgWidth = this.$imgs.width();
            this.imgCount = this.$imgs.length;
            this.$pre = this.$ct.find('.pre');
            this.$next = this.$ct.find('.next');
            this.$bullets = this.$ct.find('.bullet>li');
            this.pageIndex = 0;  //记录当前页码
            this.animating = false; //针对连续重复点击，设置变量来监听是否处于动画过程中


            this.$imgct.append(this.$imgs.first().clone());
            this.$imgct.prepend(this.$imgs.last().clone());
            this.$imgct.width((this.imgCount+2) * this.imgWidth);
            this.$imgct.css({
                left: -this.imgWidth,
            })
        }
        Carousel.prototype.bind = function () {
            var self = this;
            this.$pre.on('click',function () {
                self.playPre(1);
            })
            this.$next.on('click',function () {
                self.playNext(1);
            })
            this.$bullets.on('click',function () {
                var index = $(this).index();
                if (index < self.pageIndex) {
                    self.playPre(self.pageIndex - index);
                }
                else {
                    self.playNext(index - self.pageIndex);
                }
            })

        }
        Carousel.prototype.playPre = function (num) {
            var self = this;
            if (this.animating) {
                return; //如果还在动画中，直接return掉
            }
            this.animating = true; //进入动画，animating设为true表示正在动画中
            this.$imgct.animate({
                left: '+=' + num * this.imgWidth,
            },function () {
                self.pageIndex -= num;
                if (self.pageIndex === -1) {
                    self.pageIndex = self.imgCount-1;
                    self.$imgct.css({
                        left: -self.imgCount*self.imgWidth,
                    })
                }
                self.setBullets();
                self.animating = false; //动画结束后重新设置为false
            })
        }
        Carousel.prototype.playNext = function (num) {
            var self = this;
            if (this.animating) {
                return;
            }
            this.animating = true;
            this.$imgct.animate({
                left: '-=' + num * this.imgWidth,
            },function () {
                self.pageIndex += num;
                if (self.pageIndex === self.imgCount) {
                    self.pageIndex = 0;
                    self.$imgct.css({
                        left: -self.imgWidth,
                    })
                }
                self.setBullets();
                self.animating = false;
            })
        }
        Carousel.prototype.setBullets = function () {
            this.$bullets.removeClass('active')
                .eq(this.pageIndex).addClass('active');
        }
        Carousel.prototype.run = function () {
            var self = this;
            setInterval(function () {
                self.playNext(1);
            },1000)
        }


        return {
            init: function ($ct) { //传入选取的所有元素
                $ct.each(function (index,node) { //遍历所有选中的元素，给每一项都创建实例，这样就互不影响，而且调用组件很简洁
                    new Carousel($(node));
                })
            }
        }
    })();
//组件使用方法，调用init方法，传入选取的所有元素
    return Carousel2;
})