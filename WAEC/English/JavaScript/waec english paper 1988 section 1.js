function myResult()
{
	Result();
}

function Result()
{
	if(document.getElementsByName("option48").value =="option48E")
	{
		x = 1;
	You scored x;
	document.getElementById("me").innerHTML = "You scored "+ x;
	}
	else
	{
		x=0;
		document.getElementById("me").innerHTML = "You scored "+ x;
	}
}
