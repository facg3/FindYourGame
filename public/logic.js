
function gamefinder(){
  url = "/getgame";
  var name= document.getElementById('gamename').value;
  var datalist = document.getElementById('gameslist');
  var childArray = datalist.children;
  var cL = childArray.length;
        while(cL > 0) {
            cL--;
            datalist.removeChild(childArray[cL]);
        }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      var response = (xhr.responseText);
      response=JSON.parse(response);
    for (var i = 0; i < response.length; i++) {
        var option =document.createElement('option');
        option.setAttribute("value", response[i]);
        datalist.appendChild(option);
    }


    } else {
      console.log('Status Code: ' + xhr.status);
    }
  };
  xhr.open('POST', url);
  xhr.send(name);
  }
