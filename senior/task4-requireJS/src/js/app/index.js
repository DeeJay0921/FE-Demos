define(['jquery','com/nativeLazyLoad','com/carousel','com/senior4'],function ($,nativeLazyLoad,carousel,goTop) {
    nativeLazyLoad();
    carousel.init($('.carousel'));
    goTop($('.go-top'));
})