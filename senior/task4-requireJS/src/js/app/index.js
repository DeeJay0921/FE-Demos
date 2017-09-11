define(['lib/jquery-3.2.1.min','com/nativeLazyLoad','com/carousel','com/senior4'],function ($,nativeLazyLoad,carousel,goTop) {
    nativeLazyLoad();
    carousel.init($('.carousel'));
    goTop($('.go-top'));
})