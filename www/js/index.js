$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    randomer();
  });
});

function randomer()
{

  var rand = !Math.round(Math.random());
  if (rand == true)
  {
    navigator.notification.beep(1);
    alert(rand);
  }
  else
  {
    navigator.notification.beep(2);
    alert(rand);
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
