// JavaScript Document
var $overlay = $('<div class="overlay"></div>');
var $img = $('<img height="200px">');
var $caption = $('<p></p>')

/* Adding the overlay to the body */
$("body").append($overlay);

/* Adding the image to the overlay */
$overlay.append($img);

/* Adding the caption to the image */
$overlay.append($caption);

$("#imageGallery a").click(function(event) {
  /* Preventing the default behavior of the anchor tag */
  event.preventDefault();
  
  /* Getting the image location */
  var imgLoc = $(this).children().attr("src");
  
  /* Getting the image description */
  var imgDesc = $(this).children().attr("alt")
  
  /* Setting the overlay image */
  $img.attr("src", imgLoc);
  
  /* Setting the image caption */
  $caption.text(imgDesc);
  
  /* Showing the overlay */
  $overlay.show();
  
});

/* Hiding the overlay */
$overlay.click(function(){
  $overlay.hide();
})