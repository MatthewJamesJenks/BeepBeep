var unixtime;
var date;
var st = false;
var locationOptions = {
maximumAge: 10000,
timeout: 6000,
enableHighAccuracy: true
};
var watchID = navigator.geolocation.watchPosition(
success, fail, locationOptions);

$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });
  $('#toggle').on("click", function(){
    toggleStatus();
  });
});


function toggleStatus()
{
console.log(st + " _1");
  if (st)
  {
    console.log("true");
      st = !st;
      alert("Off");
  }
  else
  {
    console.log("false");
      st = !st;
      success(position);
      alert("On");
  }
console.log(st + " _2");
}

function success(position)
{
//do something with the position
 unixtime = new Date(position.timestamp);
 date = unixtime.toDateString();

 var time = position.timestamp;
 var latitude = position.coords.latitude;

	//OK. Now we want to update the display with the correct values
    $('#time').val("Recieved data at " + time);
    $('#lattext').val("Recieved data at " + latitude);




}

function fail(error)
{
//do something with the error
}

function random()
{

  var rand = Math.round(Math.random() * 6);

  switch(rand) {
      case 1:
          alert("possitive " + rand)
          navigator.notification.beep(1);
          break;
      case 2:
          alert("possitive " + rand)
          navigator.notification.beep(1);
          break;
      case 3:
          alert("possitive " + rand)
          navigator.notification.beep(1);
          break;
      case 4:
          alert("Negative " + rand);
          navigator.vibrate([2000]);
          break;
      case 5:
          alert("Negative " + rand);
          navigator.vibrate([2000]);
          break;
      case 6:
          alert("Negative " + rand);
          navigator.vibrate([2000]);
          break;
      default:
          navigator.vibrate([2000]);
  }
}

function submitText()
{
	var text = $('#textinput').val();
	alert(text);
}
