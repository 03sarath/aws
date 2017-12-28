var awsIot = require('aws-iot-device-sdk');

/*
var device=awsIot.device({
    keyPath:'5a26619c73-private.pem.key',
    certPath:'5a26619c73-certificate.pem.crt',
    caPath:'rootCA.pem',
    clientId:'MyBus',
    region:'ap-southeast-1'



});
*/
var device = awsIot.device({
    keyPath:'5a26619c73-private.pem.key' ,
    certPath: '5a26619c73-certificate.pem.crt',
    caPath: 'rootCA.pem',
    clientId:'MyBus',
    host:'adaexyrkpjo5d.iot.ap-southeast-1.amazonaws.com'
});

var contents ="Started.....!!!!";

device
    .on('connect',function () {

    console.log('connect');
    //device.subscribe(busPolicy);
    device.publish('$aws/things/IoTTestDevice/shadow/update',JSON.stringify({"state":{"reported":{"test_value1":399, "test_value2":982,"test_value3":66}}}));
    console.log('Message Sent...');

});

device
.on('message',function (topic,payload) {
    console.log('message',topic,payload.toString());
    
});