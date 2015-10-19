$.fn.blink = function(delay) {
  return this.each(function() {
    var obj = $(this);
    setInterval(function() {
      if ($(obj).css("visibility") == "visible") {
        $(obj).css('visibility', 'hidden');
      }
      else {
        $(obj).css('visibility', 'visible');
      }
    }, delay);
  });
}

jQuery('.myDiv').blink(1000);
// twice as fast
jQuery('.otherDiv').blink(500);// YOUR CODE GOES HERE
