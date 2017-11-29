<<<<<<< HEAD
=======
document.getElementById("gamename").addEventListener("change", gamefinder);
>>>>>>> 12ce9c2c072c6c89d5fc67fca6e908e9641a8adc

function gamefinder(){
  url = "/getgame";
  var name= document.getElementById('gamename').value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
      var response = (xhr.responseText);
      response=JSON.parse(response);
      var datalist = document.getElementById('gameslist');
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
