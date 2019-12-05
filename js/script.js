$( function() {
     $( "#menu" ).menu();
     $( "#slider" ).slider();
     $( "#tabs" ).tabs();
  } );
  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
  $( function() {
    $( "#button1" ).on( "click", function() {
      $( "#effect1" ).removeClass( "newClass1", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect1" ).addClass( "newClass1" );
      }, 1500 );
    }
  } );