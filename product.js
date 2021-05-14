document.addEventListener("DOMContentLoaded", function(){
	var btn_tang =document.querySelector(".sl_3")
	var number =document.querySelector(".sl_2").value;
	var text_t =document.querySelector(".sl_2");
	var btn_giam =document.querySelector(".sl_1")
	var sl=1;
	number=parseInt(number);
	
	// btn_tang.click(function() {
	// 	number +=1;
	// 	console.log('hhd');

	// 	text_t.innerHTML = 'hel';
	// });
	btn_tang.addEventListener('click',function() {

		number +=1;
		text_t.setAttribute('value',number);
		});
	btn_giam.addEventListener('click',function() {

		number -=1;
		text_t.setAttribute('value',number);
		});
	var size = document.querySelectorAll('.btn-outline-warning');
	var active=document.querySelector('.active3');
	for (var i = 0; i < size.length; i++) {
		size[i].addEventListener('click',function() {
			for (var j = 0; j < size.length; j++) {
				size[j].classList.remove('active3');
			}
			
			this.classList.add('active3');
		});
	}
	var giatri = document.querySelector('.giohang1').value;
	var giohang= document.querySelector('.giohang1');
	var themsp =document.querySelector('.btn_1');
	giatri = parseInt(giatri);	
	themsp.addEventListener('click', function() {
		giatri+=1;
		giohang.setAttribute('value',giatri);;
	});
	
},false)
 	

