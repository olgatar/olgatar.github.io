$('article p, ul.mylist').hide();

$('h4').click(function(){
  $(this).next('ul.mylist').slideToggle();
})
