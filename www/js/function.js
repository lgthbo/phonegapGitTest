// This is a JavaScript file
    var lang="en";
function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
        
    }

    // device APIs are available
    //
function onDeviceReady() {
        // Now safe to use device APIs
    console.log('hihihi');
        window.FirebasePlugin.onTokenRefresh(function(token) {
            // save this server-side and use it to push notifications to this device
            
            console.log(token);
          
        }, function(error) {
            console.error(error);
        });
      $("[data-i18n]").localize();
        
}
function getToken(){
  
    console.log(window.FirebasePlugin);

    window.FirebasePlugin.getToken(function(token) {
        // save this server-side and use it to push notifications to this device
        console.log(token);
        }, function(error) {
        console.error(error);
    });

}
function tokenRefresh(){
    window.FirebasePlugin.onTokenRefresh(function(token) {
    // save this server-side and use it to push notifications to this device
    console.log(token);
    }, function(error) {
    console.error(error);
    }); 
}

function statusBarHide(){
    StatusBar.hide();
}

function changeLanguage(){
    if(lng=='tw'){
        lng='en';
    }else{
        lng='tw';
    }
        i18next.changeLanguage(lng,'');
      $("[data-i18n]").localize();
}
    function shareDemo() {
      window.plugins.share.show(
          {
              subject: 'Line測試',
              text: 'email:lgthbo@gmail.com'
          },
          function() {}, // Success function
          function() {alert('Share failed')} // Failure function
      );
    }
