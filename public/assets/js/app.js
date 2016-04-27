
$(document).ready(function() {
  $('#about-link').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({
       scrollTop: ($('#about').offset().top - 0)
     }, 1000);
     return false;
   });
$('#PT-link').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: ($('#PT').offset().top - 0)
   }, 1000);
   return false;
 });
 $('#Classes-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ($('#Classes').offset().top - 0)
    }, 1000);
    return false;
  });
  $('#Pricing-link').on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({
       scrollTop: ($('#Pricing').offset().top - 0)
     }, 1000);
     return false;
   });
  });
