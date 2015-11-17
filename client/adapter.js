Template.site2.rendered = function(){
  
$(document).ready(function(){
/*var ll = function(){
  console.log("virkar");
} */
$( ".fadebtn" ).click(function() {
  $( "#sida2" ).fadeOut( 0, function() {
    document.body.style.backgroundImage = "url('')";
    $( "#sida1" ).fadeIn( 1000 );
  });
  return false;
});
});
}
