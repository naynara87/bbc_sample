//스크롤 부드럽게
$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

//스크롤탑
$('.bbc_scrolltop').bind('click', function () {
  $('html, body').animate({
    scrollTop: '0'
  }, 680);
});




//모달슬라이드
new Swiper('.swiper2', {
  loop: true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
  navigation: {
    nextEl: ".ppt-next",
    prevEl: ".ppt-prev",
  },
});

//tab 기능
var tabButton = $("[data-toggle=tab]");
tabButton.click(function () {
  var tabTarget = $(this).data('target');
  console.log(tabTarget);
  $(tabTarget).addClass('tab-active');
  $(tabTarget).siblings().removeClass('tab-active');
})


//모달
$(".modal_ck").on('click', function () {
  var idx = $(this).attr('data');
  console.log('dsf', idx);
  var element = solutionData[idx];
  $(".swiper2 .modal_content").html('');
  $(".swiper2 .swiper-wrapper").css('transform', 'translate3d(0, 0, 0);');
  $.each(element.img, function (i, item) {
    modal = '<div class="swiper-slide">' +
      '<div class="bbc_wrap">' +
      '<h2>' + element.title + '<button class="bbc_btn bbc-btn-outline-primary small">다운로드</button>' +
      '</h2>' +
      '<div class="detail">' +
      '<img src="' + item + '" alt="이미지1" class="w-100">' +
      '</div>' +
      '</div>' +
      '</div>';
    $(".swiper2 .swiper-wrapper").append(modal)

  });
});
// 모달창
var modalButton = $("[data-toggle=modal]");
var modalClose = $("[data-dismiss=modal]");

modalClose.click(function () {
  console.log('dskfjlsf');
  $(this).parents('.bbc_modal').removeClass('show');
  $('body').css("overflowY", "scroll");
  $(".swiper2 .modal_content").html('');
})

modalButton.click(function () {
  var target = $(this).data('target');
  $(target).addClass('show');
  $('body').css("overflowY", "hidden");
})

$(document).mouseup(function (e) {
  var LayerPopup = $(".bbc_modal");
  if (LayerPopup.has(e.target).length === 0) {
    LayerPopup.removeClass('show');
    $('body').css("overflowY", "scroll");
    $(".swiper2 .modal_content").html('');
  }
});



//메인슬라이드
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 햄버거 메뉴
$(".hbg_btn").on('click', function () {
  $(".hbg_btn").toggleClass("on");
  $(".hbg_btn").siblings('ul').toggleClass("on");
})
$("header nav ul .bbc_nav-link").on('click', function () {
  $(".hbg_btn").removeClass("on");
  $("header nav ul").removeClass("on");
})


// 파트너사

//메인슬라이드
var swiper = new Swiper(".partner-list", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".partner-btn-next",
    prevEl: ".partner-btn-prev",
  },
});