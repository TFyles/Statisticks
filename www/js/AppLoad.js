var onDeviceReady=function(){                             // called when Cordova is ready
   if( window.Cordova && navigator.splashscreen ) {     // Cordova API detected
       $.ui.launch(); 
       navigator.splashscreen.hide() ;                 // hide splash screen
        }
    };
    
document.addEventListener("deviceready", onDeviceReady, false) ;

        $.ui.autoLaunch = false;
        $.ui.animateHeaders = false;
                
        $(document).ready(function(){
            $.ui.setSideMenuWidth('260px');
            $.ui.launch();
});