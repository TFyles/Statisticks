/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var id;
var locationOptions;
 //when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
    
    //set up listener for button click
    $('#getLocationButton').on('click', getPosition);
    
    //change time box to show message
    $('#time').val("Press the button to get location data");
    
});


//Call this function when you want to get the current position
function getPosition() {
    
    //change time box to show updated message
    $('#time').val("Getting data...");
    
    //instruct location service to get position with appropriate callbacks
    id = navigator.geolocation.watchPosition(success, fail, locationOptions);
}


//called when the position is successfully determined
function success (position) {
    
    //You can find out more details about what the position obejct contains here:
    // http://www.w3schools.com/html/html5_geolocation.asp
    

    //lets get some stuff out of the position object
    var time = position.timestamp;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude ;
    var accur = position.coords.accuracy ;
    var altaccur = position.coords.altitudeAccuracy;
    var heading = position.coords.heading;
    var speed = position.coords.speed;

    console.log(longitude);
    
    //OK. Now we want to update the display with the correct values
    $('#time').val("Recieved data at " + time);
    $('#lattext').val(latitude);
    $('#longtext').val(longitude);
    $('#alttext').val(altitude);
    $('#acctext').val(accur);
    $('#altactext').val(altaccur);
    $('#headtext').val(heading);
    $('#speedtext').val(speed);


}

//called if the position is not obtained correctly
function fail (error) {
    //change time box to show updated message
    $('#time').val("Error getting data: " + error);
    
}

var locationOptions = {
    maximumAge: 10000,
     timeout: 6000,
    enableHighAccuracy: true
    };

    $('#stopButton').click(function(){
        navigator.geolocation.clearWatch(id);
    });

var app2{
    //constructor
    initialize: function() {
        this.bindEvents();
    },
    //Bind Event Listiner
    bindEvents: function(){
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    //Device ready event handler
    onDeviceReady: function(){
        navigator.geolocation.getCurrentPosition( onSuccess, onError);
    },
    onSuccess: function(position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latlong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latlong,
            zoom: 16,
            mapTypeId: google.maps.mapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("geolocation"), mapOptions);
    },

    onError: function(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n' );
    },
};
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);


    }
};

$(document).on("pagecreate","#pageone",function(){
  
    $('#tapholdtext').on("taphold",function(){
        $(this).hide();
    });                       

    $('#taptext').on("tap",function(){
        $(this).css('color', 'red');
    }); 

    $('#swipetext').on("swipeleft",function(){
        $(this).css('color', 'green');
    });  

    $('#swipetext').on("swiperight",function(){
        $(this).css('color', 'blue');
    });  

    $( "#makeRnd" ).click(function() {
       
        $("#rnd").text(random());
         
        if (random() == true) {
            navigator.notification.vibrate(1000);
        }
        else if (random() = false) {
            navigator.notification.vibrate(5000);
        }

    });




});


function random() { 
    return !Math.round(Math.random()); 
    }

function BallRand(){

    var Num = Math.floor((Math.random() * 20) + 1) ;

    switch (Num) {
        case 1: 
            $("#ans").text("It is Certain");
            navigator.notification.beep(3);
            break;
        case 2:
            $("#ans").text("It is decidedly so");
            navigator.notification.beep(3);
            break;
        case 3:
            $("#ans").text("Without a doubt");
            navigator.notification.beep(3);
            break;
        case 4:
            $("#ans").text("Yes definitely");
            navigator.notification.beep(3);
            break;
        case 5:
            $("#ans").text("You may rely on it");
            navigator.notification.beep(3);
            break;
        case 6:
            $("#ans").text("As I see it, yes");
            navigator.notification.beep(3);
            break;
        case 7:
            $("#ans").text("Most likely");
            navigator.notification.beep(3);
            break;
        case 8:
            $("#ans").text("Outlook good");
            navigator.notification.beep(3);
            break;
        case 9:
            $("#ans").text("Yes");
            navigator.notification.beep(3);
            break;
        case 10:
            $("#ans").text("Signs point to yes");
            navigator.notification.beep(3);
            break;
        case 11:
            $("#ans").text("Reply hazy try again");
            navigator.notification.beep(1);
            break;
        case 12:
            $("#ans").text("Ask again later");
            navigator.notification.beep(1);
            break;
        case 13:
            $("#ans").text("Better not tell you now");
            navigator.notification.beep(1);
            break;
        case 14:
            $("#ans").text("Cannot predict now");
            navigator.notification.beep(1);
            break;
        case 15:
            $("#ans").text("Concentrate and ask again");
            navigator.notification.beep(1);
            break;
        case 16:
            $("#ans").text("Don't count on it");
            navigator.vibrate(3000);
            break;
        case 17:
            $("#ans").text("My reply is no");
            navigator.vibrate(3000);
            break;
        case 18:
            $("#ans").text("My sources say no");
            navigator.vibrate(3000);
            break;
        case 19:
            $("#ans").text("Outlook not so good");
            navigator.vibrate(3000);
            break;
        case 20:
            $("#ans").text("Very doubtful");
            navigator.vibrate(3000);
            break;
        }
}
