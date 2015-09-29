$('article p').hide();

$('h4').click(function(){
  $('article p').next().slideToggle();
})
