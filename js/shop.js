$(function(){
    $("img.lazy").lazyload({
        placeholder : "../images/crowdfund/shop_begin.jpg",
        effect : "fadeIn",
        threshold : 200,
        container : $(".shop-container"),
    });
});