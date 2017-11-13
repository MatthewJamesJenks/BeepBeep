$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });
});

function random()
{

  var rand = Math.round(Math.random() * 6);

  switch(rand) {
      case 1:
          alert("possitive")
          navigator.notification.beep(1);
          break;
      case 2:
          alert("possitive")
          navigator.notification.beep(1);
          break;
      case 3:
          alert("possitive")
          navigator.notification.beep(1);
          break;
      case 4:
      alert("Negative");
      navigator.vibrate([2000]);
          break;
      case 5:
          alert("Negative");
          navigator.vibrate([2000]);
          break;
      case 6:
          alert("Negative");
          navigator.vibrate([2000]);
          break;
      default:
          navigator.vibrate([2000]);

  }
    alert(rand);



}

function submitText()
{
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value)
{
	//add some code sto store the key-value pair in persistant storage
}
