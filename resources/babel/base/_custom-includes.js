//owl-carousel start
$('.carousel-main').owlCarousel({
    lazyLoad:false,
    items:6,
    loop:true,
    rewind:false,
    margin:20,
    merge:false,
    autoWidth:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    nav:true,
    dots:true,
    responsive : {
        // breakpoint from 480 up
        0 : {
            items:1,
            nav:false,
            dots:false,
        },
        // breakpoint from 768 up
        768 : {
            items:6,
        }
    }
 
});
//owl-carousel end
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();