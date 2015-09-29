$('article p').hide();

$('h4').click(function(){
  $(this).next().slideToggle();
})
