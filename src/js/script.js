$(document).ready(function() {
  const mobileSearchToggle = $('.header__search-block-toggle');
  const searchBlock = $('.header__search-form');
  const searchInput = $('.header__search-form-input');
  const searchSubmit = $('.header__search-form-submit');

  const mobilePhonesToggle = $('.header__call-block-toggle');
  const phonesBlock = $('.header__call-block');
  const phoneNumber = $('.header__call-block-phone');
  const phoneModalCall = $('.header__call-block-order');

  const openSearch = function () {
    searchBlock.addClass('header__search-form--open');
  }

  const closeSearch = function () {
    searchBlock.removeClass('header__search-form--open');
  }

  const openPhones = function () {
    phonesBlock.addClass('header__call-block--open');
  }

  const closePhones = function () {
    phonesBlock.removeClass('header__call-block--open');
  }

  mobileSearchToggle.click(function () {
    if (searchBlock.hasClass('header__search-form--open')) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  mobilePhonesToggle.click(function () {
    if (phonesBlock.hasClass('header__call-block--open')) {
      closePhones();
    } else {
      openPhones();
    }
  });

  $(window).mousedown(function (e) {
    if (!searchInput.is(e.target) && searchInput.has(e.target).length === 0 && !searchSubmit.is(e.target) && searchSubmit.has(e.target).length === 0) {
        closeSearch();
    }
  });

  $(window).mousedown(function (e) {
    if (!phoneNumber.is(e.target) && phoneNumber.has(e.target).length === 0 && !phoneModalCall.is(e.target) && phoneModalCall.has(e.target).length === 0) {
        closePhones();
    }
  });

  phoneModalCall.click(function () {
    closePhones();
  })

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
        closeSearch();
        closePhones();
    };
  });

  $(window).on('resize', function () {
    if ($(window).width() > 767) {
      closeSearch();
      closePhones();
    }
  });

  const mainMenuToggle = $('.main-menu__mobile-toggle');
  const mainMenu = $('.main-menu__block');
  const closeMenu = function () {
    mainMenu.removeClass('main-menu__block--open');
  };

  mainMenuToggle.click(function () {
    mainMenu.toggleClass('main-menu__block--open');
  });

  $(window).mousedown(function (e) {
    if (!mainMenu.is(e.target) && mainMenu.has(e.target).length === 0 && !mainMenuToggle.is(e.target) && mainMenuToggle.has(e.target).length === 0) {
        closeMenu();
    }
  });

  const submenuMobileToggle = $('.main-menu__submenu-toggle');
  submenuMobileToggle.click(function () {
    $(this).parent().toggleClass('main-menu__item--open');
  });

  //custom scrollbar:
  const newsList = $('.news-index__news-list');
  if (newsList.length>0) {
    	newsList.jScrollPane();
  }

  //wide sliders:
  const wideSliderBlocks = $('.wide-slider');
  const sliderFunc = function(sliderBlock) {
    let slider = sliderBlock.find('.wide-slider__slider');
    let sliderPrevBtn = sliderBlock.find('.wide-slider__slider-arrow--prev');
    let sliderNextBtn = sliderBlock.find('.wide-slider__slider-arrow--next');
    slider.slick({
      prevArrow: sliderPrevBtn,
      nextArrow: sliderNextBtn,
      autoplay: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 3
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
    });
  }

  wideSliderBlocks.each(function () {
    sliderFunc($(this));
  });

  //Кол-во товара:
  const quantityBlock = $('.element__quantity-block');
  const quantityInput = quantityBlock.find('.element__quantity-input');
  const quantityBtnPlus = quantityBlock.find('.element__quantity-btn--more');
  const quantityBtnMinus = quantityBlock.find('.element__quantity-btn--less');
  const quantityMore = function () {
    let quantity = quantityInput.val();
    quantity++;
    quantityInput.val(quantity);
  };
  const quantityLess = function () {
    let quantity = quantityInput.val();
    if (parseInt(quantity) > 1) {
      quantity--;
    } else {
      quantity = 1;
    }
    quantityInput.val(quantity);
  };

  quantityBtnPlus.click(function () {
    quantityMore();
  });
  quantityBtnMinus.click(function () {
    quantityLess();
  });

  //tabs:
  const tabLinks = $('.tabs__link');
  let activeTabLink = $('.tabs__link--active');
  let activeHref = activeTabLink.data('tab');
  let allTabs = $('.tabs__single-tab');

  if(allTabs.length > 0) {
    allTabs.each(function () {
      if ($(this).data('tab') !== activeHref) {
        $(this).hide();
      }
    });

    tabLinks.click(function (e) {
      e.preventDefault();
      if (!$(this).hasClass('tabs__link--active')) {
        let tabs = $(this).parents('.tabs').find('.tabs__single-tab');
        let href = $(this).data('tab');

        tabLinks.removeClass('tabs__link--active');
        $(this).addClass('tabs__link--active');
        tabs.each(function () {
          if ($(this).data('tab') !== href) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      }
    });
  }

  //product sliders:
  const detailSlider = $('.detail-slider');

  if (detailSlider.length > 0) {
    const bigSlider = detailSlider.find('.detail-slider__big');
    const smallSlider = detailSlider.find('.detail-slider__small');
    const sliderPrev = detailSlider.find('.detail-slider__big-arrow--prev');
    const sliderNext = detailSlider.find('.detail-slider__big-arrow--next');

    bigSlider.slick({
      asNavFor: smallSlider,
      prevArrow: sliderPrev,
      nextArrow: sliderNext,
      autoplay: false,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
    });

    smallSlider.slick({
      dots: false,
      arrows: false,
      asNavFor: bigSlider,
      autoplay: false,
      adaptiveHeight: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      focusOnSelect: true,
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 3
              }
          },
          // {
          //     breakpoint: 575,
          //     settings: {
          //         slidesToShow: 2
          //     }
          // }
      ]
    });
  }

  //catalog filter:
  const singleBlockToggle = $('.filter__single-block-head, .filter__single-block-toggle');
  const singleBlockBody = $('.filter__single-block-body');

  singleBlockToggle.click(function (e) {
    let parent = $(this).parents('.filter__single-block');

    e.stopPropagation();
    parent.toggleClass('filter__single-block--open');
    parent.find('.filter__single-block-body').slideToggle(200);
  });
});
