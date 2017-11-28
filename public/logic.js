function gamefinder(){
  url = "/getgame"
  var name= document.getElementById('gamename').value;
  console.log("The game is: " + name)
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      var response = (xhr.responseText);

    } else {
      console.log('Status Code: ' + xhr.status);
    }
  };
  xhr.open('POST', url);
  xhr.send(name);
  }
