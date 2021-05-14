document.addEventListener("DOMContentLoaded", function(){
	var trangthai= "tren";
	var tt="tren";
	var hh= "hien";
	var the1 = document.querySelectorAll('.phai ul li');
	var gachmenu= document.querySelector('.gach');
	var topmenuhien= document.querySelector('.phai');
	var earch1 = document.querySelector('.search1');
	var them1 = document.querySelectorAll(' .the');
	var them2 =document.querySelectorAll('.the img');
	var search2= document.querySelector('.search');
	earch1.addEventListener('click',function(){
		
		if(hh=='hien')
		{
			search2.classList.add('hien');
			hh='an';
		}
		else if(hh=='an')
		{
			search2.classList.remove('hien');
			hh='hien';
		}
	});
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
	var dung="d";
	for (var i = 0; i < bocuc.length; i++) {
		bocuc[i].addEventListener('click',function() {
			/* Act on the event */
			if(dung=="d")
			{
				for (var i = 0; i < them1.length; i++) {
					them1[i].classList.add('themthe');
				}
				for (var i = 0; i < them2.length; i++) {
					them2[i].classList.add('themimg');
				}
				dung='s';
			}
			else if(dung=="s")
			{
				for (var i = 0; i < them1.length; i++) {
					them1[i].classList.remove('themthe');
				}
				for (var i = 0; i < them2.length; i++) {
					them2[i].classList.remove('themimg');
				}
				dung='d';
			}
			for (var i = 0; i < bocuc.length; i++) {
				bocuc[i].classList.remove('tron');
			}
			this.classList.toggle('tron');
		});
	}

	
	},false)
 		