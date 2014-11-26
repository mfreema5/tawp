$(window).ready(function() {

  if ($(this).width() < 45.25 * 16) {  // small screen, 
    var nav = $('#global');  // get #global element

    function hide(nav) {         // hide function: display and slowly disappear

      nav.animate({            // hide down in 1 sec
        bottom: '-5em'
      }, 1000);
    };
    
    function show(nav) {         // hide function: display and slowly disappear
      nav.animate({           
        bottom: '0em'            // be there in 0.1 sec
      }, 200);
    };

    nav.animate({           
      bottom: '0em'            // be there 1 sec
    }, 1000);
    hide(nav);

    var timer = 0;
    $(this).scroll(function() {  // scroll and display
      if(timer) {                // scroll is tricky because it happens all the time
        clearTimeout(timer);     // so set a timeout to realize throttle
        timer=0;
      };
      timer = setTimeout(function() {  // start a new event before the previous ends
        show(nav);
      }, 200);
      timer = setTimeout(function() {  // start a new event before the previous ends     
        nav.animate({           
          bottom: '0em'            // be there 2 sec
        }, 2000);
        hide(nav)
      }, 2000);

    });

  };      
});