$('article p, ul, li').hide();

$('h4').click(function(){
  $('article p, ul, li').next().slideToggle();
})
