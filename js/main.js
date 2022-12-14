document.addEventListener("DOMContentLoaded", function () {
  $('.header-burger').click(function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('.header-bottom__content').toggleClass('active');
    $('body').toggleClass('o-hidden');
  });

  if ($(window).width() > 1200) {
    window.addEventListener('scroll', function () {
      let header = document.querySelector('header');
      header.classList.toggle('scroll', window.scrollY > 150);
      // header.classList.toggle('scroll', window.scrollY > 200);
    });

    $('.sublist').mouseover(function () {
      $('.sublist').not(this).removeClass('active').find('.header-dropdown').slideUp(0);
      $(this).addClass('active').find('.header-dropdown').slideDown(0);
    });

    $('.header-dropdown__list li').mouseover(function () {
      $(this).parent().find('li').removeClass('active');
      $(this).addClass('active');
      var data = $(this).data('sublist');
      $(this).parent().next().find('.header-dropdown__sublist').removeClass('active');
      $(this).parent().next().find('.header-dropdown__sublist[data-sublist=' + data + ']').addClass('active');
      // $('.header-dropdown__sublist').removeClass('active');
      // $('.header-dropdown__sublist[data-sublist=' + data + ']').addClass('active');
    });

    $('.header').mouseleave(function () { 
      $('.header-dropdown').slideUp(0);
      $('.sublist').removeClass('active');
    });

    $('.header-list > li:not(".sublist")').mouseover(function () {
      $('.sublist').removeClass('active').find('.header-dropdown').slideUp(0);
    });

    $('.header-search-btn').click(function (e) {
      e.preventDefault();
      $(this).closest('form').addClass('active');
    });

    $(document).mouseup(function (e) {
      var div = $('.header-search');
      if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.header-search').removeClass('active');
      }
    });
  } else if ($(window).width() <= 768) {
    $('.sublist').click(function () {
      $('.sublist').not(this).removeClass('active').find('.header-dropdown').slideUp();
      $(this).toggleClass('active').find('.header-dropdown').slideToggle();
    });
  }
  
  var bannerSlider = new Swiper('#banner-slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.banner-pagination',
    },
    navigation: {
      nextEl: '.banner-button-next',
      prevEl: '.banner-button-prev',
    },
  });

  var bannerAdvantagesSlider = new Swiper('#banner-advantages-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
  });

  // if ($('#banner-advantages-slider').length > 0) {
  //   if ($(window).width() >= 769) {
  //     bannerAdvantagesSlider.destroy();
  //   }
  // }

  $('.categories-filter__item').click(function (e) {
    e.preventDefault();
    $('.categories-filter__item').removeClass('active');
    $(this).addClass('active');
  });

  var categoriesSlider = new Swiper('#categories-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
  });

  const popularCategoriesSlider = new Swiper('#popular-categories-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.popular-categories-pagination',
    },
    navigation: {
      nextEl: '.popular-categories-button-next',
      prevEl: '.popular-categories-button-prev',
    },
  });

  jQuery(function ($) {
    $('.form-phone').mask('+ 7 (999) 999 - 99 - 99');
  });

  const teamSlider = new Swiper('#team-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.team-pagination',
    },
    navigation: {
      nextEl: '.team-button-next',
      prevEl: '.team-button-prev',
    },
  });

  const advantagesSlider = new Swiper('#advantages-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
  });

  const victoriesSlider = new Swiper('#victories-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      },
      1201: {
        autoplay: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.victories-pagination',
    },
    navigation: {
      nextEl: '.victories-button-next',
      prevEl: '.victories-button-prev',
    },
  });

  const reviewsSlider = new Swiper('#reviews-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.reviews-pagination',
    },
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
  });

  const recommendationsSlider = new Swiper('#recommendations-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      },
      1201: {
        autoplay: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.recommendations-pagination',
    },
    navigation: {
      nextEl: '.recommendations-button-next',
      prevEl: '.recommendations-button-prev',
    },
  });

  const massMediaSlider = new Swiper('#mass-media-slider', {
    slidesPerView: 'auto',
    speed: 5000,
    loop: true,
    loopedSlides: 6,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      }
    },
 

    on: {
      slideChange: function (massMediaSlider) {
          $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
          $('.swiper-pagination-bullet:nth-child('+ (massMediaSlider.realIndex % 3 + 1) +')').addClass('swiper-pagination-bullet-active');
      }
    },
    navigation: {
      nextEl: '.mass-media-button-next',
      prevEl: '.mass-media-button-prev',
    },
  });

  const blogSlider = new Swiper('#blog-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          // clickable: false,
          dynamicBullets: false,
        }
      }
    },
    on: {
      slideChange: function (blogSlider) {
          $('.swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');
          $('.swiper-pagination-bullet:nth-child('+ (blogSlider.realIndex % 3 + 1) +')').addClass('swiper-pagination-bullet-active');
      }
    },
    navigation: {
      nextEl: '.blog-button-next',
      prevEl: '.blog-button-prev',
    },
  });

  const newsSlider = new Swiper('#news-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      },
      1201: {
        autoplay: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.news-pagination',
    },
    navigation: {
      nextEl: '.news-button-next',
      prevEl: '.news-button-prev',
    },
  });

  if ($('.news-slider').hasClass('news-slider-press-center') && $(window).width() >= 769) {
    newsSlider.disable();
  }

  if ($(window).width() <= 768) {
    $('.footer-group__title').click(function () {
      $('.footer-group__title').not(this).removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideToggle();
    });
  }

  function clientsAnimation() {
    let clientsItems = $('.clients-item');
    for (var i = 0; i < clientsItems.length; i++) {
      const elem = clientsItems[i];

      elem.style.animationDuration = (i / 4 + 8) + 's';
    }
  }

  clientsAnimation();
  
  $('.select-text').click(function () {
    $(this).toggleClass('active').next().slideToggle();
  });

  $('.select-dropdown__option').click(function () {
    var value = $(this).attr('data-select');
    $(this).addClass('active').closest('.select-dropdown').slideUp().end().closest('.select').find('.select-input').val(value).end().find('.select-text').toggleClass('active').text(value);
    $('.select-dropdown__option').not(this).removeClass('active');
  });

  $('.info-item__heading').click(function () {
    $(this).toggleClass('active').next().slideToggle();
    $('.info-item__heading').not(this).removeClass('active').next().slideUp();
  });

  // $('.info-item__arrow').click(function () {
  //   $(this).parent().toggleClass('active').next().slideToggle();
  //   $('.info-item__arrow').not(this).parent().removeClass('active').next().slideUp();
  // });

  // let marker = document.querySelector('#marker');
  // let item = document.querySelectorAll('.result-heading__item');

  // function indicator(e) {
  //   marker.style.left = e.offsetLeft + 'px';
  //   marker.style.width = e.offsetWidth + 'px';
  // }

  // item.forEach(link => {
  //   link.addEventListener('click', (e) => {
  //     indicator(e.target);
  //     console.log(item);
  //   });
  // });

  $('.result-heading__item').click(function () {
    $('.result-heading__item').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('result');
    $('.result-item').removeClass('active');
    $('.result-item[data-result=' + data + ']').toggleClass('active');
  });

  function updateCalculator() {
    let i = 1;
    let progress = document.querySelector('.calculator-progress span');
    let count = $('.calculator-steps span');

    $('.calculator-item__next').click(function (e) {
      e.preventDefault();
      i+= 1;
      var data = $(this).data('calculator');
      $('.calculator-item').removeClass('active');
      $('.calculator-item[data-calculator=' + data + ']').toggleClass('active');
      progress.style.width = (20 * i) + '%';
      count.text(i);

      if (i === 5) {
        $('.calculator-content').addClass('last-step');
      }
    });

    $('.calculator-item__back').click(function (e) {
      e.preventDefault();
      i-= 1;
      var data = $(this).data('calculator');
      $('.calculator-item').removeClass('active');
      $('.calculator-item[data-calculator=' + data + ']').toggleClass('active');
      progress.style.width = (20 * i) + '%';
      count.text(i);
    });
  }

  updateCalculator();
  
  const riskSlider = new Swiper('#risk-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      769: {
        enabled: false,
      }
    }
  });


  // var checkbox = document.querySelector(".label-checkbox > input[name=checkbox]");
  // let checkOpen = document.querySelector(".prices-item__heading");
  // let checkdropDown = document.querySelector(".prices-item__dropdown");
  
  // checkbox.addEventListener('change', function() {
  //   if (this.checked) {
  //     checkOpen.classList.add("active");
  //     checkdropDown.style.display = 'block';
  //   } else {
      
  //     checkOpen.classList.remove("active");
  //     checkdropDown.style.display = 'none';
  //   }
  // });


  

  $('.checkbox-title').click(function () {
    $(this).parents('.prices-item__heading').toggleClass('active').next().slideToggle();
    $('.checkbox-title').not(this).parent('.prices-item__heading').removeClass('active').next().slideUp();
  });

  
  $('.prices-item__arrow').click(function () {
    $(this).parents('.prices-item__heading').toggleClass('active').next().slideToggle();
    $('.prices-item__arrow').not(this).parent('.prices-item__heading').removeClass('active').next().slideUp();
  });

  $('.procedure-heading__item').click(function () {
    $('.procedure-heading__item').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('procedure');
    $('.procedure-item').removeClass('active');
    $('.procedure-item[data-procedure=' + data + ']').toggleClass('active');
  });

  $('.procedure-btn__next').click(function (e) {
    e.preventDefault();
    var data = $(this).data('procedure');
    $('.procedure-item, .procedure-heading__item').removeClass('active');
    $('.procedure-item[data-procedure=' + data + '], .procedure-heading__item[data-procedure=' + data + ']').toggleClass('active');
  });

  $('.faq-item__heading').click(function () {
    $(this).toggleClass('active').next().slideToggle();
    $('.faq-item__heading').not(this).removeClass('active').next().slideUp();
  });

  // $('.faq-item__arrow').click(function () {
  //   $(this).parent().toggleClass('active').next().slideToggle();
  //   $('.faq-item__arrow').not(this).parent().removeClass('active').next().slideUp();
  // });

  if ($('#page-navigation').length > 0) {
    function pageNavigation() {
      var sectionAnchor = $('.section-anchor');
      var navigationMenu = $('#page-navigation');
      var navigationMenuHeight = navigationMenu.outerHeight();

      $(window).on('scroll', function () {
        var currentPosition = $(this).scrollTop();

        sectionAnchor.each(function () {
          var top = $(this).offset().top - navigationMenuHeight,
            bottom = top + $(this).outerHeight();

          if (currentPosition >= top && currentPosition <= bottom) {
            navigationMenu.find('.page-navigation__item').removeClass('active');
            navigationMenu.find('.page-navigation__item[href="#' + $(this).attr('id') + '"]').addClass('active');
          }
        });
      });
    }

    pageNavigation();
  }

  $('.page-navigation__item.anchor').click(function (e) {
    e.preventDefault();
    $('.page-navigation__item').removeClass('active');
    $(this).addClass('active');
    let menu = $('.page-navigation');
    // let menuHeigt = menu.height();
    let menuHeigt = menu.outerHeight();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('html').animate({
      scrollTop: top - menuHeigt
    }, 1000);
  });

  $('.documents-filter__item').click(function (e) {
    e.preventDefault();
    $('.documents-filter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.worth-filter__item').click(function (e) {
    e.preventDefault();
    $('.worth-filter__item').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('worth');
    $('.worth-item').removeClass('active');
    $('.worth-item[data-worth=' + data + ']').toggleClass('active');
  });
  
  $('.details-filter__item').click(function (e) {
    e.preventDefault();
    $('.details-filter__item').removeClass('active');
    $(this).toggleClass('active');
    var data = $(this).data('details');
    $('.details-item').removeClass('active');
    $('.details-item[data-details=' + data + ']').toggleClass('active');
  });



 

  $('.contacts-info__btn').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').next().slideToggle();
  });

  $('.details-requisites__copy').click(function (e) {
    let text = $(this).parent().find('.details-requisites__description').text().trim();
    window.navigator.clipboard.writeText(text);
    alert('??????????????????????: ' + text);
  });

  $('.team-filter__item').click(function (e) {
    e.preventDefault();
    $('.team-filter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.page-blog__filter-item').click(function (e) {
    e.preventDefault();
    $('.page-blog__filter-item').removeClass('active');
    $(this).addClass('active');
  });

  var publicationsSlider = new Swiper('#publications-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        autoplay: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.publications-pagination',
    },
    navigation: {
      nextEl: '.publications-button-next',
      prevEl: '.publications-button-prev',
    },
  });

  // const pageBlogSlider = new Swiper('.page-blog-slider', {
  //   slidesPerView: 'auto',
  //   speed: 1200,
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     769: {
  //       enabled: false,
  //     }
  //   },
  //   pagination: {
  //     clickable: true,
  //     dynamicBullets: true,
  //     renderBullet: function (index, className) {
  //       return `
  //         <span class="${className}">
  //           <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  //             <path opacity="0.2"
  //               d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
  //               stroke="white" stroke-width="1.4" />
  //           </svg>
  //         </span>
  //       `;
  //     },
  //     el: '.blog-pagination',
  //   },
  //   navigation: {
  //     nextEl: '.page-blog-button-next',
  //     prevEl: '.page-blog-button-prev',
  //   },
  // });

  if (!$('.page-blog-slider').hasClass('page-blog-slider_category')) {
    const pageBlogSlider = new Swiper('.page-blog-slider', {
      slidesPerView: 'auto',
      speed: 1200,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        769: {
          enabled: false,
        }
      },
      pagination: {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return `
            <span class="${className}">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2"
                  d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                  stroke="white" stroke-width="1.4" />
              </svg>
            </span>
          `;
        },
        el: '.blog-pagination',
      },
      navigation: {
        nextEl: '.page-blog-button-next',
        prevEl: '.page-blog-button-prev',
      },
    });
  }

  $('.page-pagination__item').click(function (e) {
    e.preventDefault();
    $('.page-pagination__item').removeClass('active');
    $(this).addClass('active');
  });

  const glossarySlider = new Swiper('#glossary-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // autoplay: {
    //   delay: 4000,
    // },
    breakpoints: {
      769: {
        enabled: false,
      }
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.glossary-pagination',
    },
    navigation: {
      nextEl: '.glossary-button-next',
      prevEl: '.glossary-button-prev',
    },
  });

  const atmosphereSlider = new Swiper('#atmosphere-slider', {
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    slidesPerView: 'auto',
    speed: 1200,
    // loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      },
    },
    pagination: {
      // clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.atmosphere-pagination',
    },
    navigation: {
      nextEl: '.atmosphere-button-next',
      prevEl: '.atmosphere-button-prev',
    },
  });

  const successStorySlider = new Swiper('#success-story-slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // slidesPerView: 'auto',
    speed: 1200,
    // loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        pagination: {
          dynamicBullets: false,
        }
      },
    },
    pagination: {
      // clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return `
          <span class="${className}">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.2"
                d="M1 13C1 19.6274 6.37258 25 13 25C19.2907 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13Z"
                stroke="white" stroke-width="1.4" />
            </svg>
          </span>
        `;
      },
      el: '.success-story-pagination',
    },
    navigation: {
      nextEl: '.success-story-button-next',
      prevEl: '.success-story-button-prev',
    },
  });

  $('.vacancies-filter__item').click(function (e) {
    e.preventDefault();
    $('.vacancies-filter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('.vacancies-subfilter__item').click(function (e) {
    e.preventDefault();
    $('.vacancies-subfilter__item').removeClass('active');
    $(this).addClass('active');
  });

  $('#input-file').change(function (e) {
    let uploadFileName = e.target.files[0].name;
    let inputFileName = document.getElementById('input-file__name');

    inputFileName.textContent = uploadFileName;
    // if (this.value != '') {
    //   $(this).parent().addClass('active');
    // } else {
    //   $(this).parent().removeClass('active');
    // }
  });

  $('.modal-up').click(function (e) {
    e.preventDefault();
    const modalTitles = ['???????????????? ?????????????????????? ????????????????????????', '???????????????? ????????????', '???????????? ????????????????????????????', '???????????? ????????????', '???????????????? ???????????????????????????????? ????????????????????????'];
    const modalBtnText = ['???????????????? ????????????????????????', '???????????????? ????????????', '?????????????????? ????????????', '?????????????????? ????????????', '???????????????? ????????????????????????'];
    let data = $(this).data('modal');

    $('.popup-title:not(".popup-sent__title")').text(modalTitles[data - 1]);
    $('.popup-form__btn').text(modalBtnText[data - 1]);
    $('body').addClass('o-hidden');
    $('#popup').addClass('active');
  });

  $('.popup-close').click(function (e) {
    e.preventDefault();
    $('body').removeClass('o-hidden');
    $('.popup').removeClass('active');
  });

  // ?????????????? ?????????? ???????????????? ??????????
  function modalSend() {
    $('.popup').removeClass('active');
    $('#popup-sent').addClass('active');
  }

  $('.glossary-all__filter-item').click(function (e) {
    e.preventDefault();
    $('.glossary-all__filter-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.info-description__more').click(function (e) {
    e.preventDefault();
    $(this).addClass('d-none').prev().addClass('all-text');
  });

  $('.page-rubric__heading').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').next().slideToggle();
  });

  $('.part-team__description-more').click(function (e) {
    e.preventDefault();
    $(this).addClass('d-none').prev().addClass('all-text');
  });


  


  $(document).ready(function(){
    $(window).scroll(function(){
      var windowTop = $(window).scrollTop(),
      documentHeight = $(document).height(),
      windowHeight = $(window).height();
      var scroll = (windowTop / (documentHeight - windowHeight))*100;
      $('.scroll-line').css("width", (scroll + '%'));
    });
  });
  
  
 

  
  

});


const teamFilterSwiper = new Swiper('.team-filter__swiper ', {
  slidesPerView: 'auto',
  wrapperClass: 'team-filter__swiper-wrapper',
  slideClass: 'team-filter__slide',
  breakpoints: {
    769: {
    
    }
  },

});



jQuery(document).ready(function(){
  jQuery('.scrollbar-macosx').scrollbar();
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



 // ???????? ???????????????? 

 function tab(parent, i = 0) {
  try {
      let p = parent
      let t = p.querySelectorAll('.page-navigation__item-tab')
      let b = p.querySelectorAll('.contacts-content-tab')

      function tabActive(index) {
          t.forEach(item => {
              item.classList.remove('page-navigation__item-tab--active')
          });
          t[index].classList.add('page-navigation__item-tab--active')
          b.forEach(item => {
              item.classList.remove('contacts-content-tab--active')
          });
          b[index].classList.add('contacts-content-tab--active')
      }

      tabActive(i)

      t.forEach((element, index) => {
          element.addEventListener('click', function(e) {
              e.preventDefault()
              tabActive(index)
          })
      });
  } catch {
      console.log('tabs error')
  }
}

if (document.querySelector('.global__table')) {
    let myTabs = document.querySelectorAll('.global__table')
    myTabs.forEach(element => {
        tab(element)
    });
}