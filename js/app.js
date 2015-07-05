$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    //alert('mouse entered .ryu div');
    //$('.ryu-still').hide();
    $('.ryu-action').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    //$('.ryu-ready').hide();
    $('.ryu-action').hide();
    $('.ryu-still').show();

  })
  .mousedown(function() {
    //console.log('mousedown');
    // play hadouken sound
    playHadouken();
    //$('.ryu-ready').hide();
    $('.ryu-action').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '1050px'},
        500, //milliseconds
        function() {
          $(this).hide();
          $(this).css('left', '550px');
        }
    );
  })
  .mouseup(function() {
    //console.log('mouseup');
    //$('.ryu-throwing').hide();
    $('.ryu-action').hide();
    $('.ryu-ready').show();

  });

  $('body').keydown(function(e) {
    //alert('keydown happened');
    if( e.keyCode === 88 ) {
      //$('.ryu-still').hide();
      //$('.ryu-ready').hide();
      //$('.ryu-throwing').hide();
      $('.ryu-action').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(e) {
    //alert('keydown happened');
    if( e.keyCode === 88 ) {
      //$('.ryu-cool').hide();
      $('.ryu-action').hide();
      $('.ryu-still').show();
    }
  });

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

