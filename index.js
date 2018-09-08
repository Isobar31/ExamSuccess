/******************************************* JavaScript code for auto image slide show ******************************************/
var slideIndex = 0;
changeImage();

function changeImage() {
    var i;
    var x = document.getElementsByClassName("EducationImage");
    for (i = 0; i < x.length; i++)
	{
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(changeImage, 5000); // Change image every 10 seconds
}

/******************************************* JavaScript code for manual image slide show ******************************************/
			var index = 1;

			function plusIndex(n)
			{
				index = index + 1;
				showImage(index);
			}

			showImage(1);

			function showImage(n)
			{
			var i;
			var x = document.getElementsByClassName("EducationImage");
			if(n > x.length)
				{
					index = 1;
				}if(n < 1)
				{
					index = x.length;
				}

			for(i=0; i<x.length; i++)
				{
					x[i].style.display = "none";
				}
				x[index-1].style.display = "block";
			}
/******************************************* JavaScript code for Home animation ******************************************/

function showOnMouseHover(elem, clr){
	var elementId = document.getElementById(elem);
	elementId.style.transition = "left 0.5s ease-in 0s";
	elementId.style.background = clr;
	elementId.style.fontSize ="19px";
}

function showOnMouseOff(elem, clr){
	var elementId = document.getElementById(elem);
	elementId.style.transition = "left 0.5s ease-out 0s";
	elementId.style.background = clr;
	elementId.style.fontSize ="18px";
}
