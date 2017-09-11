define(['jquery'],function ($) {
    var nativeLazyLoad = function () {
        var currentPage = 0;
        var waterFallArr = [];
        var waterFallCol = parseInt($('#pic-ct').width() / $('.item').width());
        for (var i = 0; i < waterFallCol; i ++) {
            waterFallArr[i] = 0;
        }
        var clock;
        getData();
        $(window).on('scroll',function () {
            if (clock) {
                clearTimeout(clock);
            }
            clock = setTimeout(function () {
                if (checkShow($('#load'))) {
                    getData();
                }
            },300)
        })
        function getData() {
            $.ajax({
                url: 'http://platform.sina.com.cn/slide/album_tech',
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                method: 'get',
                data: {
                    app_key: 1271687855,
                    page: currentPage,
                    num: 20,
                }
            }).done(function (ret) {
                if (ret.status.code == 0) {
                    render(ret.data);
                    currentPage++;
                }
            })
        }
        function render (arr) {
            $(arr).each(function (i,e) {
                var html = '';
                html += '<li class="item">';
                html += '<a href=" ' +e.url + ' " class="link"><img src=" '+e.img_url +' "></a>'
                html += '<h4 class="header">' +e.short_name+ '</h4>';
                html += '<p class="desp">'+e.short_intro+'</p></li>';
                var $node = $(html);
                $node.find('img').on('load',function () {
                    $('#pic-ct').append($node);
                    // console.log(html)
                    // console.log($node)
                    waterFall($node);
                })
            })
        }
        function waterFall ($node) {
            var minHeight = Math.min.apply(null,waterFallArr);
            var minHeightIndex = waterFallArr.indexOf(minHeight);
            // console.log(waterFallArr)
            $node.css({
                left: minHeightIndex * $node.outerWidth(true),
                top: minHeight,
            })
            waterFallArr[minHeightIndex] += $node.outerHeight(true);
            $('#pic-ct').height(Math.max.apply(null,waterFallArr));
        }
        function checkShow ($node) {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            var nodeOffsetTop = $node.offset().top;

            if (nodeOffsetTop < windowHeight + scrollTop + 300) {
                return true;
            }
            return false;
        }
    };
    return nativeLazyLoad;
})