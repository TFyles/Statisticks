var DeviceInformationLoader = function (require, exports, module) {
    var exec = require("cordova/exec");
    
    function DeviceInformation () {}
        
    DeviceInformation.prototype.get = function (successFunc, failFunc) {
        exec(successFunc, failFunc, "DeviceInformation","get",[]);
    };
    
    var deviceInformation = new DeviceInformation();
    module.exports = deviceInformation;
};

DeviceInformationLoader(require, exports, module);

cordova.define("cordova/plugin/DeviceInformation", DeviceInformationLoader);

            var deviceInfo = cordova.require("cordova/plugin/DeviceInformation");
deviceInfo.get(function(result) {
        document.write("result = " + result);
    }, function() {
        document.write("error");
    });



