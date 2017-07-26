window.App = {
  start: function() {
    
  },
  
  generateZcashCommand: function() {
     var returnZAddress = document.getElementById("returnZAddress").value;  
     var mailingAddress = document.getElementById("mailingAddress").value;  
     
     var hexReturnZAddress = asciiToHexString(returnZAddress);
     var hexMailingAddress = asciiToHexString(mailingAddress);

     var memoData = hexReturnZAddress + hexMailingAddress;
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
