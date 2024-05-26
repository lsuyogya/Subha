document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#txtSplide', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
  
    var thumbnails = new Splide( '#imgSplide', {
    //   fixedWidth  : 100,
    //   fixedHeight : 60,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      perPage: 3, 
    } );
  
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );