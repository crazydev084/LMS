
const IS_ACTIVE_CLASS = 'is-active'
const HEADER_STICKY = 'header-sticky'

const htmlEl = document.querySelector('html')
const bodyEl = document.querySelector('body')
const headerEl = document.querySelector('.js-header')
const btnMobile = document.querySelector('.js-btn-mobile')
const navEl = document.querySelector('.js-nav')
const headerOverlayEl = document.querySelector('.js-header-overlay')
const menuEls = navEl.querySelectorAll('.header__menu-item')
const headerMenu = document.querySelector('.header__menu')
const headerButton = document.querySelector('.header__button-wrapper')
const postionHeight = 46

const activateMenu = () => {
  if (navEl && bodyEl && btnMobile && headerEl) {
    navEl.classList.add(IS_ACTIVE_CLASS)
    headerEl.classList.add(IS_ACTIVE_CLASS)
    btnMobile.classList.add(IS_ACTIVE_CLASS)
    bodyEl.classList.add('no-scroll')
  }
}

function deactivateMenu() {
  if (navEl && bodyEl && btnMobile) {
    navEl.classList.remove(IS_ACTIVE_CLASS)
    btnMobile.classList.remove(IS_ACTIVE_CLASS)
    headerEl.classList.remove(IS_ACTIVE_CLASS)
    bodyEl.classList.remove('no-scroll')
  }
}

$(function() {

  handleHeaderSticky()

  if (btnMobile) {
    btnMobile.addEventListener('click', () => {
      if (navEl.classList.contains(IS_ACTIVE_CLASS)) {
        deactivateMenu()
      } else {
        activateMenu()
      }
    })
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1279) {
      deactivateMenu()
    }
  })

  if (headerOverlayEl) {
    headerOverlayEl.addEventListener('click', () => {
      deactivateMenu()
    })
  }

  function handleHeaderSticky() {
    const scrollHeight = window.pageYOffset
    if (!headerEl) return false
  
    if (scrollHeight > postionHeight) {
      return headerEl.classList.add(HEADER_STICKY)
    }
    return headerEl.classList.remove(HEADER_STICKY)
  } 

  window.addEventListener('scroll', function() {
    handleHeaderSticky()
  })

  menuEls.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
      deactivateMenu()
    })
  })

  function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('load', setVh);
  window.addEventListener('resize', setVh);
})

$(function() {
  var procedureCarousel = $('.js-procedure-carousel')
  var necfruServiceSlider = $('.js-necfru-service-slider')
  var tooltipDesc = $('.js-tooltip-desc')
  var tooltip = $('.js-tooltip')

  if (procedureCarousel.length) {
    procedureCarousel.slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      infinite: false,
      speed: 300,
      arrows: false,
      variableWidth: true,
    })
  }

  if (necfruServiceSlider.length) {
    necfruServiceSlider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.js-necfru-func-button-left'),
      nextArrow: $('.js-necfru-func-button-right'),
      variableWidth: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    })
  }

  tooltip.mouseover(function(){
    tooltipDesc.removeClass('hide')
  })
  
  tooltip.mouseout(function(){
    tooltipDesc.addClass('hide')
  })
  
  $('.js-tooltip-desc-close').click(function(){
    tooltipDesc.addClass('hide')
  })
})

$(function() {
  var showItem = 2;
  var windowWidth = $(window).width();

  function handleMoreOpen(item, btnOpen) {
    var contents = item;
    $(btnOpen).on('click', function () {
      $(contents + ':nth-child(n + ' + (showItem) + ')').slideDown();
      $(this).removeClass('block-md');
    })
  }

  var questionData = {
    item: '.js-question-and-answer-item',
    btnOpen: '.js-question-and-answer-open',
  }

  var necfruFunData = {
    item: '.js-necfru-fun-item',
    btnOpen: '.js-necfru-fun-open',
  }

  var companyData = {
    item: '.js-necfru-fun-item',
    btnOpen: '.js-company-open'
  }

  function deactiveMoreButton(item) {
    $(item).each((index, value) => {
      if (value.style.display) {
        value.style.display = '';
      }
    })
  }

  handleMoreOpen(necfruFunData.item, necfruFunData.btnOpen);
  handleMoreOpen(questionData.item, questionData.btnOpen);
  handleMoreOpen(companyData.item, companyData.btnOpen);

  $(window).on('load resize', function(){
    if ($(window).width() != windowWidth) {
      windowWidth = $(window).width();
    }
    if (windowWidth > 768) {
      deactiveMoreButton(necfruFunData.item);
      deactiveMoreButton(questionData.item);
      deactiveMoreButton(companyData.item);
      $(questionData.btnOpen).addClass('block-md');
      $(necfruFunData.btnOpen).addClass('block-md');
      $(companyData.btnOpen).addClass('block-md');
    }
  })
})

$(document).ready(function(){
  var transactionRecordsCarousel = $('.js-transaction-records-carousel');
  if(transactionRecordsCarousel.length) {
    transactionRecordsCarousel.endlessRiver({
      speed: 50,
    });
  }
});

$(function() {
  const videoBtn = $('.js-video')
  const imageThumb = $('.js-image-thumb')
  imageThumb.on('click', function () {
    $(this).next().css({
      'z-index' : 1,
      'opacity': 1
    });
    $(this).next().trigger('play')
  })

  videoBtn.on('click', function () {
    if (this.paused) {
      this.play()
    } else {
      this.pause()
    }
  })
})
