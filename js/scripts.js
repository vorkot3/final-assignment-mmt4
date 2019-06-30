//MOBILE HEADER

$('.mobile-toggle').click(function(){
    $('#nav-ul').slideToggle(400, function() {
        $(this).toggleClass("active");
        
        if($('#nav-ul').toggleClass != "active" ) {
            $(this).css('display', '');
        }
    });
});


//DARK MODE

$(document).on("change",".switch",function() { 
    
   $("body").add("nav").add("nav li").add(".member-info").add(".site-container").add(".burger-icon i").add(".modal-content").add(".modal").add(".video-container-content h3").add(".ui-accordion-header-active").add("header ul a").toggleClass("dark");
    
});


//ACCORDION

$(function () {
    $("#accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true,
        header: '.accordion-parent h3'
    });
    
 $(".h3").click(function(){
      $(this).find('.rotate').toggleClass("down"); 
    })
});



//VIDEO PLAYER

$('.video-js').each(function() {
          
    var player = videojs(this.id);
    var parent = $(this).parents('.video-parent');
    var playBtn = parent.find('.video-play');
    var rewindBtn = parent.find('.video-rewind');
    var checkBtn = parent.find('.video-check');
    var forwardBtn = parent.find('.video-forward')
    
    var parentAcc = $(this).parents('.accordion-parent');
    var accH3 = parentAcc.find('h3');
    var checkMrk = accH3.find('.tutorial-completed');
    
    console.log (  checkMrk );
    
    
    player.on('ready', function(){
        
        
       

         playBtn.click(function (){

            if (!player.paused()) {            
                 player.pause();

            } 
              else {
                player.play();
            }
              
        });

        //rewind
        $(rewindBtn).click(function (){
            var time = player.currentTime();
            player.currentTime(time - 10); 
        });
        
         //forward
        $(forwardBtn).click(function (){
            var time = player.currentTime();
            player.currentTime(time + 3); 
        });

        //Wanneer video klaar is
          player.on('ended', function(){
            $(checkBtn).css("display", "inline-block");
              
        });
    });
    
    
        //MODAL OPENEN EN SLUITEN 

        $('.close-modal').click(function () {
            $('.modal').css("display", "none");
            $(checkBtn).hide();
            $('.button-visibility').trigger("reset");
            
        });

        $(checkBtn).click(function () {
            $('.modal').css("display", "block");
            $(checkMrk).show();
        });
});


//VIDEO BUTTONS BIJ HOVER
    
    if  ($(window).width() > 786 ) { 
          $('.video-js').add('.video-button').hover(function () {
            $('.button-visibility').addClass("hover");
        }, function () {
            $(".button-visibility").removeClass("hover");  
    }); 
}   
