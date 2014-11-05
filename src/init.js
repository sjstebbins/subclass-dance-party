$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    //SIZING ISSUE
    // var getHeight= function(){
    //   console.log(dancerMakerFunction());
    //   return $('.blinky').css('height');
    // };

    // console.log($(this));

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);

    // draggable dancer feature
    $(".dancer").draggable();

  });
  //Intial background
  imageUrl = 'http://38.media.tumblr.com/ae0819cd15f347fedb4a6f5df99a9a7e/tumblr_n3f00pJUrd1r59d2yo1_500.gif';
  $(document.body).css('background-image',  'url(' + imageUrl + ')');

  //Change background on doubleClick
  imageUrls = [];
    imageUrls.push('http://s3-ec.buzzfed.com/static/enhanced/webdr02/2013/7/22/15/anigif_enhanced-buzz-29277-1374522979-11.gif');
    imageUrls.push('http://girlmeetlondon.files.wordpress.com/2014/04/hda8ff34b.gif');
    imageUrls.push('http://cdn1.smosh.com/sites/default/files/legacy.images/smosh-pit/092010/dancefail-18.gif');
    imageUrls.push('http://38.media.tumblr.com/ae0819cd15f347fedb4a6f5df99a9a7e/tumblr_n3f00pJUrd1r59d2yo1_500.gif');
    imageUrls.push('https://38.media.tumblr.com/24589e53f440f78938858cf5f752ad61/tumblr_msi8scaEjH1svk4jmo1_400.gif');
  $(document.body).on('dblclick',function(){
    $(document.body).css('background-image',  'url(' + imageUrls[Math.floor(Math.random()*imageUrls.length)] + ')');
  });

  //Have Dancers grow/shrink on mouseover
  // $('.dancer').on('mouseover',function(){
  //     $(this).stop();
  //     $(this).animate({
  //       width: '150%',
  //       height: '150%'
  //     }, 200);
  //   }, function(){
  //   //handle mouse out
  //     $(this).stop();

  //     $(this).animate({
  //       width: '150%',
  //       height: '150%'
  //     }, 200);
  //   });


  //Line Up button
  $('#line').on('click',function(){
    console.log(window.dancers);
    $('.dancer').addClass('line');
    var lineUpWidth = window.width/window.dancers.length;
    for (var i=0;i<dancers.length;i++){
      dancers[i].setPosition( 300 , lineUpWidth * i);
    }
  });
  //Change background image button
  $('#background').on('click',function(){
    $(document.body).css('background-image',  'url(' + imageUrls[Math.floor(Math.random()*imageUrls.length)] + ')');
  });
  //delet Dancer on doubleclick


});

