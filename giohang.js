document.addEventListener("DOMContentLoaded", function(){
	var nutxoa= document.querySelectorAll('.h3');
	var the23 =document.querySelectorAll('.thenho');
	for (var i = 0; i < nutxoa.length; i++) {
		nutxoa[i].addEventListener('click', function() {
			var ndhien= this.getAttribute('data-mk');
			var phantuhienlen= document.getElementById(ndhien);
			phantuhienlen.classList.add('xoa');
		});
	}
	var h22 =document.querySelector('.h2');
	h22.addEventListener('click',function(){
		alert("mua hàng thành công");
		for (var i = 0; i < the23.length; i++) {
			the23[i].classList.add('xoa');
		}
	});


},false)