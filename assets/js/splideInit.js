document.addEventListener('DOMContentLoaded', function () {
  // Check if :root has direction: rtl
  const isRtl = getComputedStyle(document.documentElement).direction === 'rtl';

  const rtlOptions = isRtl
    ? { paginationDirection: 'rtl', direction: 'rtl' }
    : {};

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
    ...rtlOptions, // Spread rtlOptions if RTL detected
  });

  var thumbnails = new Splide('#imgSplide', {
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
    ...rtlOptions, // Spread rtlOptions if RTL detected
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
    ...rtlOptions, // Spread rtlOptions if RTL detected
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
    ...rtlOptions, // Spread rtlOptions if RTL detected
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
  mini.sync(mini2);
  mini.mount();
  mini2.mount();
});
