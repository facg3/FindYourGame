var game= document.getElementById('gamename').value;


function gamefinder(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response)
    } else {
      console.log('Status Code: ' + xhr.status);
    }
  };
  xhr.open('GET', url);
  xhr.send(game);
  }
