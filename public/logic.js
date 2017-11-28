const game = require("../backend/src/handlers");


function gamefinder(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    if (xhr.status === 200) { 
      var response = JSON.parse(xhr.responseText);
      callback(response)
    } else {
      console.log('Status Code: ' + xhr.status);
    }
  });
  xhr.open('GET', url);
  xhr.send();
  }
