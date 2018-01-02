$('#all').click(function(){
  $('.tab-pane').each(function(){

    $(this).addClass('active');
  });
});
$('.other').click(function(){
  $('.tab-pane').each(function(){
    $(this).removeClass('active');
  })
})
