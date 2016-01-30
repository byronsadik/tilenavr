'use strict';

$(function() {

  /* 
    tileIsOpen[0] = TOP
    tileIsOpen[1] = RIGHT 
    tileIsOpen[2] = DOWN
    tileIsOpen[3] = LEFT
  */

  var tileIsOpen=[false,false,false,false];  

  var bgColor = '#ffffff';
  var allArrows = $('.arrow');


  allArrows.addClass('active');


  // adding click event listeners for the arrows

  $('.down').click(function() {
    if ( !(openTileCheck()) ){
      moveUp();
    }

    else if (tileIsOpen[2]) {
      moveBackDown();
    }
  });

  $('.left').click(function() {
    if ( !(openTileCheck()) ) {
      moveRight();
    }

    else if (tileIsOpen[3]) {
      moveBackLeft();
    }
  });


  $('.right').click(function() {  
    if ( !(openTileCheck()) ) {
      moveLeft();
    }
    else if (tileIsOpen[1]) {
      moveBackRight();
    }
  });


  $('.top').click(function() {
    if ( !(openTileCheck()) ){
      moveDown();
    }
    else if (tileIsOpen[0]) {
      moveBackUp();
    }
  });




  // adding keyboard event listener for the arrow keys
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    
    switch (evt.keyCode) {
      case 38: //up key, can also be up-swipe, 
        
        if (!(openTileCheck()) ){
          moveUp();
        }

        else if (tileIsOpen[0]){
          moveBackUp();
        }

        break;

      case 39: //right key, can also be right-swipe
        
        if ( !(openTileCheck()) ){
          moveRight();
        }

        else if (tileIsOpen[1]){
          moveBackRight();
        }
        
        break;

      case 40: //down key, can also be down-swipe
      
        if ( !(openTileCheck()) ){
          moveDown();
        }
        else if (tileIsOpen[2]){
          moveBackDown();
        }
        
        break;

      case 37: //left key, can also be left-swipe
      
        if (!(openTileCheck()) ){
          moveLeft();
        }
        else if (tileIsOpen[3]){
          moveBackLeft();
        }
      
        break;
    }
  };

  //touch-based functionality, using the touchswipe plugin
  $('html').swipe({

    swipeUp: function(event, direction, distance, duration, fingerCount) {
      
      if (!(openTileCheck()) ){
        moveUp();
      }

      else if (tileIsOpen[0]){
        moveBackUp();
      }
      
    },

    swipeRight: function(event, direction, distance, duration, fingerCount) {
      
      if ( !(openTileCheck()) ){
        moveRight();
      }

      else if (tileIsOpen[1]){
        moveBackRight();
      }

    },

    swipeDown: function(event, direction, distance, duration, fingerCount) {
    
      if ( !(openTileCheck()) ){
        moveDown();
      }

      else if (tileIsOpen[2]){
        moveBackDown();
      }
      
    },

    swipeLeft: function(event, direction, distance, duration, fingerCount) {
    
      if (!(openTileCheck()) ){
        moveLeft();
      }
     
      else if (tileIsOpen[3]){
        moveBackLeft();
      }
    
    }
      
  });




  // checks if any tiles are on
  function openTileCheck(){
    var check = false;
      for (var x = 0; x < tileIsOpen.length; x++) {
        if (tileIsOpen[x] == true){
            check = true;
            break;
        }
    }
    return check; 
  }





  // this is the code that actually toggles the animations for the tiles; they get called by either the touch, keyboard, or mouse click events


  function moveUp() { 
    $('.lebowski').removeClass('lebowski-out').addClass('lebowski-in');
    $('.down').removeClass('active').removeClass('down').addClass('down-pressed');
    tileIsOpen[2] = true;
    openTile();
  }

  function moveLeft() {
    $('.mobydick').removeClass('mobydick-out').addClass('mobydick-in');
    $('.right').removeClass('active').removeClass('right').addClass('right-pressed');
    tileIsOpen[1] = true;
    openTile();
  }
  
  function moveDown() {
    $('.birdonit').removeClass('birdonit-out').addClass('birdonit-in'); 
    $('.top').removeClass('active').removeClass('top').addClass('top-pressed');
    tileIsOpen[0]=true;
    openTile();
  }
  
  function moveRight() {
    $('.westeros').removeClass('westeros-out').addClass('westeros-in'); 
    $('.left').removeClass('active').removeClass('left').addClass('left-pressed');
    tileIsOpen[3]=true;
    openTile();
  }





  // resetting tiles back to default
  function moveBackDown() {
    resetBody();

    $('.lebowski').removeClass('lebowski-in').addClass('lebowski-out');
    $('.down-pressed').removeClass('down-pressed').addClass('down').addClass('active');
    $('.active').css({'display':'block'}); 

    tileIsOpen[2]=false;
  }

  function moveBackRight() {
    resetBody();
    
    $('.mobydick').removeClass('mobydick-in').addClass('mobydick-out');
    $('.right-pressed').removeClass('right-pressed').addClass('right').addClass('active');
    $('.active').css({'display':'block'}); 

    tileIsOpen[1] = false;
  }

  function moveBackUp() {
    resetBody();

    $('.birdonit').removeClass('birdonit-in').addClass('birdonit-out');
    $('.top-pressed').removeClass('top-pressed').addClass('top').addClass('active');
    $('.active').css({'display':'block'}); 

    tileIsOpen[0] = false;
  }

  function moveBackLeft() {
    resetBody();

    $('.westeros').removeClass('westeros-in').addClass('westeros-out');
    $('.left-pressed').removeClass('left-pressed').addClass('left').addClass('active');
    $('.active').css({'display':'block'}); 

    tileIsOpen[3] = false;
  }


  function openTile(){
    $('h1').css({'display': 'none'});
    $('.active').css({'display': 'none'});
  }


  function resetBody(){
    $('body').css({'background-color': bgColor});
    $('h1').css({'display': 'block'});
  }


}); // end jQuery