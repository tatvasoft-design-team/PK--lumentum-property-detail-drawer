// Property Info Slider
$(document).ready(function () {
  $('.comparables-drawer .map-toggle').on('click', function () {
     $(this).toggleClass('active');
    $(this).closest('.comparables-drawer').find(".drawer-body .comparables-map").slideToggle(300);
  });

  $('.filter-dropdown .btn-close').on('click', function () {
    $(this).closest('.dropdown').find('.filter-btn').dropdown('toggle');
  });

    const swiper = new Swiper(".comparables-detail-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});