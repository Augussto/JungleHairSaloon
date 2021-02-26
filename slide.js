var slideIndex = [1,1,1];
var slideId = ["firstSlide","secondSlide","gallery-slide"];
var timer;

timerSlide = (no) => {
	//clearTimeout(timer);
	timer = setTimeout(()=> plusSlide(1,no),5000);
	/*timer = setTimeout(()=> plusSlide(1,0),2000);
	timer = setTimeout(()=> plusSlide(1,1),2000);*/
}

showSlides = (n, no) => {
	var i;
	var slides = document.getElementsByClassName(slideId[no]);
	if(n > slides.length) slideIndex[no] = 1;
	if(n < 1) slideIndex[no] = slides.length;
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		//console.log(i);
	}
	slides[slideIndex[no]-1].style.display = "block";
	//console.log(slideIndex);

	timerSlide(no);
}

plusSlide = (n, no) => showSlides (slideIndex[no] += n, no);

showSlides(1,0);
showSlides(1,1);
showSlides(1,2);

