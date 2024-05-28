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
  // console.log(slideComponents);

  slideWidth = 'calc(100% / imgSlidePerPage - marginRight)';
  const firstSlideWidth = `calc(100% / ${imgSlidePerPage} - ${marginRight} + 5%)`;
  // const otherSlideWidth = `calc(100% / ${imgSlidePerPage} - ${marginRight} - 5% / ${imgSlidePerPage})`;
  const otherSlideWidth = `calc(100%)`;

  slideComponents.forEach((slide, index) => {
    console.log(slide);
    if (index != 1) {
      slide.style.width = otherSlideWidth;
      return;
    }
    slide.style.width = firstSlideWidth;
  });
});
