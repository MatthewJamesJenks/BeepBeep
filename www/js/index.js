$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    randomer();
  });
});

function randomer()
{

  var rand = !Math.round(Math.random());
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
