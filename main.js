$("#clickMe").on('click', function() {
  if (popover.style.display == 'block') {
    $(popover).hide()
  } else {
    $(popover).show()
  }
})
$(wrapper).on('click',function(e){
  e.stopPropagation()
})
$(document).on('click',function(){
  $(popover).hide()
})