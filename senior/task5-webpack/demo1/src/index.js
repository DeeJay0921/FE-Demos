define(['jquery','app/nativeLazyLoad','app/carousel','app/senior4'],function ($,nativeLazyLoad,carousel,goTop) {
    nativeLazyLoad();
    carousel.init($('.carousel'));
    goTop($('.go-top'));
})