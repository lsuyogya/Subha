const imgSlidePerPage = 3;
const marginRight = '6.67px';
document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#txtSplide', {
    type: 'fade',
    rewind: true,
    pagination: false,
    flickMaxPages: 1,
    perPage: 1,
    updateOnMove: true,
    breakpoints: {
      768: {
        arrows: false,
      },
    },
  });

  var thumbnails = new Splide('#imgSplide', {
    //   fixedWidth  : 100,
    //   fixedHeight : 60,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
    flickMaxPages: 1,
    perPage: 5,
    updateOnMove: true,
    lazyload: 'sequential',
    focus: 1,
    breakpoints: {
      768: {
        perPage: 1,
        arrows: true,
      },
    },
  });

  var mini = new Splide('#imgSplideMini', {
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
    flickMaxPages: 1,
    perPage: 5,
    updateOnMove: true,
    lazyload: 'sequential',
    breakpoints: {
      768: {
        perPage: 2,
        arrows: true,
      },
    },
  });
  var mini2 = new Splide('#imgSplideMiniLeft', {
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: true,
    isNavigation: true,
    flickMaxPages: 1,
    perPage: 1,
    updateOnMove: true,
    lazyload: 'sequential',
    breakpoints: {
      768: {
        arrows: false,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
  mini.sync(mini2);
  mini.mount();
  mini2.mount();

  // thumbnails.on('move', function (newIndex) {
  //   // Get the list of slides
  //   var list = thumbnails.Components.Elements.list;
  //   var slides = thumbnails.Components.Elements.slides;

  //   // Get the active slide
  //   var activeSlide = slides[newIndex];

  //   // Reorder the slides
  //   list.prepend(activeSlide);

  //   // Refresh thumbnails to update the order
  //   thumbnails.refresh();
  // });
});
