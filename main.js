$('article p, ul, li').hide();

$('h4').click(function(){
  $(this).next().slideToggle();
})
