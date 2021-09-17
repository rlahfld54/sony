// html 을 렌더링할때 실행
$(document).ready(function () {

    // 스크롤바의 위치에 따라서 gotop 이 보이고 숨겨짐
    $(window).scroll(function () {
        // 스크롤바의 위치를 체크한다.
        var scY = $(window).scrollTop();
        if (scY >= 400) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }
    });

    // 위로가기 
    $('.gotop').click(function (e) {
        // href를 막는다.
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    // 메뉴기능
    var menu = $('.menu-list > li:nth-child(2) > a');
    var depth2 = $('.depth2');


    // 타이머 저장하자.
    var depth2_timer;

    menu.mouseenter(function () {
        clearTimeout(depth2_timer); // 타이머를 없애자 ? 왜? 서브 메뉴 보여야 하니.
        depth2.stop().slideDown(400);
    });

    menu.mouseleave(function () {
        depth2_timer = setTimeout(depth2Out, 50); // 시간을 주고 depth2 를 사라지게 하겠다.
    });

    depth2.mouseenter(function () {
        clearTimeout(depth2_timer); // 타이머를 없애자 ? 왜? 서브 메뉴 보여야 하니.
    });

    depth2.mouseleave(function () {
        depth2_timer = setTimeout(depth2Out, 50); // 시간을 주고 depth2 를 사라지게 하겠다.
    });

    function depth2Out() {
        depth2.stop().slideUp(400);
    }


    // 상품 검색 관련
    let search_wrap = $('.search-wrap');
    let search_txt = $('#search-txt');
    let form_cancel = $('.form-cancel');

    search_txt.keyup(function () {
        let temp = $(this).val();
        console.log(temp);
        if (temp == '') {
            form_cancel.hide();
        } else {
            form_cancel.show();
        }
    });

    form_cancel.click(function () {
        search_txt.val('');
        // form_cancel.hide();는 this로 쓸수 있다.
        $(this).hide();
    });


    //소니검색 버튼을 눌렀을 때
    let search = $('.search');

    search.click(function () {
        search_wrap.slideToggle();
    });



    // 최신 상품 슬라이드
    var sw_latest = new Swiper('.sw-latest', {
        slidesPerView: "auto",
        // spaceBetween: 25,
        slidesPerGroup: 3,
        pagination: {
            el: '.sw-latest-pg',
            clickable: true,
        },
        navigation: {
            prevEl: '.sw-latest-prev',
            nextEl: '.sw-latest-next',
        },
        on: {
            slideChange: function () { }
        },
    });

    // 버튼 보이고, 숨기기
    $('.sw-latest').mouseenter(function () {
        $('.sw-latest-prev').stop().fadeIn(300);
        $('.sw-latest-next').stop().fadeIn(300);
    });
    $('.sw-latest').mouseleave(function () {
        $('.sw-latest-prev').stop().fadeOut(300);
        $('.sw-latest-next').stop().fadeOut(300);
    });

    // 뉴스 슬라이더
    var sw_news = new Swiper('.sw-news', {
        slidesPerView: 3,
        spaceBetween: 52,
        allowTouchMove: false,
        // touchRatio: 0,
    });

    // 더보기 버튼
    var addon_bt = $('.addon-bt');
    var addon_main = $('.addon-main');
    var addon_bt_icon = addon_bt.find('>i');

    addon_bt.click(function () {
        // 내용을 보여주는 것을 토글한다.
        addon_main.slideToggle();
        // 아이콘의 클래스를 토글한다.
        addon_bt_icon.toggleClass('icon-up-micro');
        addon_bt_icon.toggleClass('icon-down-micro');
    });

    // SNS 기능
    $('.yt').mouseenter(function () {

        var box = $(this).attr('data-sns');
        $(box).show();

        $('.sns-box').show();
    });

    $('.yt').mouseleave(function () {
        $('.sns-cont').hide();
        $('.sns-box').hide();
    });

    $('.fb').mouseenter(function () {
        var box = $(this).attr('data-sns');
        $(box).show();
        $('.sns-box').show();
    });


    $('.fb').mouseleave(function () {
        $('.sns-cont').hide();
        $('.sns-box').hide();
    });

    $('.ig').mouseenter(function () {
        var box = $(this).attr('data-sns');
        $(box).show();
        $('.sns-box').show();
    });

    $('.ig').mouseleave(function () {
        $('.sns-cont').hide();
        $('.sns-box').hide();
    });


});


// image, video, audio 등 리소스를 불러들였을 때 실행 
window.onload = function () { };