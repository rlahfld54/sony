// html 을 렌더링할때 실행
$(document).ready(function () {
  //안내창
  let modal = $(".modal");
  let modal_con = $(".modal-con");
  let modal_close = $(".madal-close");

  modal.click(function () {
    $(this).fadeOut();
  });

  modal_close.click(function () {
    $(this).hide();
    console.log("닫기버튼");
  });

  //소니사이트 클릭했을때
  let site = $(".site");
  let sonysite = $(".sonysite");
  let sonysite_close = $(".sonysite-close");

  sonysite_close.click(function (e) {
    sonysite.click(function () {
      $(this).fadeOut();
    });
  });

  site.click(function () {
    sonysite.show();
  });

  // 스크롤바의 위치에 따라서 gotop 이 보이고 숨겨짐
  $(window).scroll(function () {
    // 스크롤바의 위치를 체크한다.
    var scY = $(window).scrollTop();
    if (scY >= 400) {
      $(".gotop").addClass("gotop-active");
    } else {
      $(".gotop").removeClass("gotop-active");
    }
  });

  // 위로가기
  $(".gotop").click(function (e) {
    // href를 막는다.
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  // 메뉴기능
  var menu = $(".menu-list > li:nth-child(2) > a");
  var depth2 = $(".depth2");

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
  let search_wrap = $(".search-wrap");
  let search_txt = $("#search-txt");
  let form_cancel = $(".form-cancel");

  search_txt.keyup(function () {
    let temp = $(this).val();
    console.log(temp);
    if (temp == "") {
      form_cancel.hide();
    } else {
      form_cancel.show();
    }
  });

  form_cancel.click(function () {
    search_txt.val("");
    // form_cancel.hide();는 this로 쓸수 있다.
    $(this).hide();
  });

  //소니검색 버튼을 눌렀을 때
  let search = $(".search");

  search.click(function () {
    search_wrap.slideToggle();
  });

  // 최신 상품 슬라이드
  var sw_latest = new Swiper(".sw-latest", {
    slidesPerView: "auto",
    // spaceBetween: 25,
    slidesPerGroup: 3,
    pagination: {
      el: ".sw-latest-pg",
      clickable: true,
    },
    navigation: {
      prevEl: ".sw-latest-prev",
      nextEl: ".sw-latest-next",
    },
    on: {
      slideChange: function () {},
    },
  });

  // 버튼 보이고, 숨기기
  $(".sw-latest").mouseenter(function () {
    $(".sw-latest-prev").stop().fadeIn(300);
    $(".sw-latest-next").stop().fadeIn(300);
  });
  $(".sw-latest").mouseleave(function () {
    $(".sw-latest-prev").stop().fadeOut(300);
    $(".sw-latest-next").stop().fadeOut(300);
  });

  // 뉴스 슬라이더
  var sw_news = new Swiper(".sw-news", {
    slidesPerView: 3,
    spaceBetween: 52,
    allowTouchMove: false,
    // touchRatio: 0,
  });

  // 더보기 버튼
  var addon_bt = $(".addon-bt");
  var addon_main = $(".addon-main");
  var addon_bt_icon = addon_bt.find(">i");

  addon_bt.click(function () {
    // 내용을 보여주는 것을 토글한다.
    addon_main.slideToggle();
    // 아이콘의 클래스를 토글한다.
    addon_bt_icon.toggleClass("icon-up-micro");
    addon_bt_icon.toggleClass("icon-down-micro");
  });

  // SNS 기능
  const sns_box = $(".sns-box");
  const sns_cont = $(".sns-cont");
  const sns_atag = $(".footer-sns a");
  const sns_box_close = $(".sns-box-close");

  const sns_stx = 240; // 최초 sns-box 위치
  const sns_space = 40; // 아이콘 오버시 sns-box 간의 간격
  const sns_box_attr = "data-sns"; // 오버시 보여줄 대상 attr
  const sns_atag_total = sns_atag.length;

  let sns_pos_arr = [];
  for (let i = 0; i < sns_atag_total; i++) {
    sns_pos_arr[i] = sns_stx + sns_space * i;
  }

  // 동일한 동작이 반복(2번 이상)이 된다.
  // 현재 보여야 할 sns-cont 를 저장한다.
  let sns_cont_box;

  function snsPos(_num, who) {
    // 모두 숨겨라
    sns_cont.hide();
    // 일단 내용을 바꾸어서 보여줄 준비를 한다.
    let box = who.attr(sns_box_attr);
    sns_cont_box = $(box);
    sns_cont_box.show();
    // 위치를 잡는다.
    sns_box.css({
      left: _num,
    });
    // 부드럽게 보여준다.
    sns_box.stop().fadeIn();
  }

  // 닫기 버튼 클릭
  sns_box_close.click(function () {
    // sns_cont.hide();
    sns_box.stop().fadeOut(500);
  });
  // 마우스가 롤 오버 되면 계속 보여야 한다.
  sns_box.mouseenter(function () {
    // 모두 숨겨라
    sns_cont.hide();
    // 저장해 둔 것은 보여라
    sns_cont_box.show();
    $(this).show();
  });
  sns_box.mouseleave(function () {
    $(this).hide();
  });

  function snsHide() {
    sns_cont.hide();
    sns_box.hide();
  }

  $.each(sns_atag, function (index, item) {
    $(this).mouseenter(function () {
      snsPos(sns_pos_arr[index], $(this));
    });
    $(this).mouseleave(function () {
      snsHide();
    });
  });
  // heart 관련
  $(".hot-box-img .icon-heart").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("icon-heart-active");
  });
});

// image, video, audio 등 리소스를 불러들였을 때 실행
window.onload = function () {};
