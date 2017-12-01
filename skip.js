$(document).ready(function() {
                  var z = setInterval(function(){ timer() }, 3000);
                  
                  function timer() {
                  
                  var x = document.getElementsByClassName('skip-credits');
                  y = x.length;
                  if (y >= 1) {
                  $('span.nf-flat-button-text').trigger('click');
                  
                            }
                  }
                  
                  function stop() {
                    clearInterval(z);
                  
                  }
                  
                  
});
