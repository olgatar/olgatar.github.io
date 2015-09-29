$('article p, li.mylist').hide();

$('h4').click(function(){
  $(this).next('li.mylist').slideToggle();
})
