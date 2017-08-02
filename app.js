window.App = {
  start: function() {
     if (detectmob()) {
       var inputDiv = document.getElementById('input');
       inputDiv.style.display='none';
     }
  },
  
  generateZcashCommand: function() {

     var returnZAddress = document.getElementById("returnZAddress").value;  
     var mailingAddress = document.getElementById("mailingAddress").value;  
     var radios = document.getElementsByName('tshirtSize');
     var shirtSize;
     for (var i = 0, length = radios.length; i < length; i++) {
       if (radios[i].checked) {
         //alert(radios[i].value);
         shirtSize = radios[i].value;
         // only one radio can be logically checked, don't check the rest
         break;
       }   
     }   
     
     var hexShirtSize = asciiToHexString(shirtSize);
     var hexReturnZAddress = asciiToHexString(returnZAddress);
     var hexMailingAddress = asciiToHexString(mailingAddress);
     

     var memoData = hexShirtSize + hexReturnZAddress + hexMailingAddress;
     //var memoData = returnZAddress + hexMailingAddress;
     
     var zcashCommandTextElement = document.getElementById("zcashCommand"); 
     zcashCommandTextElement.innerHTML = "zcash-cli z_sendmany \"FROM_ADDRESS\" \"[{\\\"amount\\\": 0.007, \\\"address\\\": \\\"zcMR6U3HgP2L8wL2UzXFnKqwFCgwqGcVQ26SPNaRwEouvJFMJ2rsrf2B6zZ1CSEAegceUGCXWCBFvNV6dst6nKm8kSiMWeA\\\", \\\"memo\\\": " + memoData + " }]\"";
  }
};

window.addEventListener('load', function() {
  App.start();
});

function asciiToHexString(ascii) {
  var bytes = [];
  
  for (var i = 0; i < ascii.length; ++i) {
    var code = ascii.charCodeAt(i);
    bytes = bytes.concat([code & 0xff, code / 256 >>> 0]);
  }
  
  var hex = Array.from(bytes, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
  
  return hex;

}

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
