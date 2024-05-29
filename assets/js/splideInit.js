const imgSlidePerPage = 3;
const marginRight = '6.67px';
document.addEventListener('DOMContentLoaded', function () {
  var main = new Splide('#txtSplide', {
    type: 'fade',
    rewind: true,
    pagination: false,
    perPage: 1,
  });

  var thumbnails = new Splide('#imgSplide', {
    //   fixedWidth  : 100,
    //   fixedHeight : 60,
    gap: 10,
    rewind: true,
    pagination: false,
    arrows: false,
    isNavigation: true,
    perPage: imgSlidePerPage,
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
  imgSlide = document.getElementById('imgSplide');
  slideComponents = imgSlide.querySelectorAll('.splide__slide');
});
