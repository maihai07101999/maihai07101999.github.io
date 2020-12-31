document.addEventListener("DOMContentLoaded", function(){
	var trangthai= "tren";
	var tt="tren";
	var gachmenu= document.querySelector('.gach');
	var topmenuhien= document.querySelector('.phai');
	window.addEventListener('scroll',function(){ 
		
		var menu=document.querySelector('.topmenu');
		

		if(window.pageYOffset>130)
		{
			if(trangthai=='tren')
			{
				trangthai='duoi';
				menu.classList.add('active');
			}
		}
		else if(window.pageYOffset<=130)
		{
			if(trangthai=='duoi')
			{
				trangthai='tren';
				menu.classList.remove('active');
				
			}
		}

		 })
		gachmenu.addEventListener('click',function() {
			/* Act on the event */
			if(tt=='tren')
			{
				tt='duoi';
				topmenuhien.classList.remove('hienlen1');
				topmenuhien.classList.add('hienlen');
			}
			else if(tt=='duoi')
			{
				tt='tren';
				topmenuhien.classList.add('hienlen1');
				topmenuhien.classList.remove('hienlen');
			}
		});
	var bocuc = document.querySelectorAll('.td ul li i')
	for (var i = 0; i < bocuc.length; i++) {
		bocuc[i].addEventListener('click',function() {
			/* Act on the event */

			for (var i = 0; i < bocuc.length; i++) {
				bocuc[i].classList.remove('tron');
			}
			this.classList.toggle('tron');
		});
	}

	},false)
 		
