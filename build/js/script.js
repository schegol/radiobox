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
	$('.news-index__news-list').jScrollPane();
});
