$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });
});

function random()
{

  var rand = !Math.round(Math.random());

  if(rand == true)
  {
    alert(rand);
    navigator.notification.beep(1);
  }
  else if (rand == false)
  {
    alert(rand);
    navigator.notification.beep(2);
  }

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
