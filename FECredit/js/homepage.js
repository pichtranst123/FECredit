
setTimeout(() => {
	var parent = document.querySelector('.owl-carousel-1');
  var glassne1dong=parent.querySelectorAll('.glassne1')
  function tratextcontentglassne1(aaaa){
	var textcont1=[];
	for(let i of aaaa){
		textcont1.push(i.innerHTML)
  }
  	return textcont1;
  }
	
  var textcontent1cuaglass1=tratextcontentglassne1(glassne1dong)
  var feedbackrightttt=document.querySelector('.feedbackanright')
  var currentglass1=2;
	glassne1dong[currentglass1].classList.add('choose')
  	feedbackrightttt.addEventListener('click',function(){
		var element = document.querySelector(".feedbackwidth");
		var value = window.getComputedStyle(element).getPropertyValue("flex");
		var parts = value.split(" "); 
		var number = parseFloat(parts[2]); 
			var glassne1dong=parent.querySelectorAll('.glassne1')
			var child = document.createElement('div');
			child.className = 'feedbackwidth glassne glassne1';
			var textcontent1cuaglass1=tratextcontentglassne1(glassne1dong)
			child.innerHTML =textcontent1cuaglass1[currentglass1-2];
			parent.appendChild(child)
			if(number==33.3333){
				glassne1dong[currentglass1].classList.remove('choose')
				tranformnow=-33.33333*currentglass1
				currentglass1=currentglass1+1
				glassne1dong[currentglass1].classList.add('choose')
				transformfather=tranformnow
				parent.style.transform="translateX("+transformfather+"%)"
			}else if(number==50){
				glassne1dong[currentglass1-1].classList.remove('feedbacktransformright')
				glassne1dong[currentglass1].classList.remove('choose')
				glassne1dong[currentglass1+1].classList.remove('feedbacktransformleft')
				tranformnow=-50*currentglass1-25
				currentglass1=currentglass1+1
				glassne1dong[currentglass1-1].classList.add('feedbacktransformright')
				glassne1dong[currentglass1].classList.add('choose')
				glassne1dong[currentglass1+1].classList.add('feedbacktransformleft')
				transformfather=tranformnow
				parent.style.transform="translateX("+transformfather+"%)"
			}else if(number==80){
				glassne1dong[currentglass1].classList.remove('choose')
				currentglass1=currentglass1+1
				tranformnow=-80*currentglass1+10
				glassne1dong[currentglass1].classList.add('choose')
				transformfather=tranformnow
				parent.style.transform="translateX("+transformfather+"%)"
			}
  })
  var feedbackleft=document.querySelector('.feedbackanleft')
  var isEventDisabled = false;
function disableEvent() {
  isEventDisabled = true;
  setTimeout(enableEvent, 600); 
}
function enableEvent() {
  isEventDisabled = false;
}
  	feedbackleft.addEventListener('click',function(){
		var element = document.querySelector(".feedbackwidth");
		var value = window.getComputedStyle(element).getPropertyValue("flex");
		var parts = value.split(" "); 
		var number = parseFloat(parts[2]); 
		var elemento = document.querySelector(".owl-carousel-1");
		var transformStyle = elemento.style.transform;	
		if(currentglass1==2){
			if (!isEventDisabled) {
				if(number==50){
					disableEvent();
					document.querySelector('.owl-carousel-1').classList.remove('gorighttt')
					void document.querySelector('.owl-carousel-1').offsetWidth
					var glassne1dong=parent.querySelectorAll('.glassne1')
					var child = document.createElement('div');
					child.className = 'feedbackwidth glassne glassne1';
					var textcontent1cuaglass1=tratextcontentglassne1(glassne1dong)
					child.innerHTML =textcontent1cuaglass1[currentglass1+2];
					document.querySelector('.owl-carousel-1').classList.add('gorighttt')
					setTimeout(function(){
						parent.prepend(child)
				
					},601)
					glassne1dong[0].classList.add('feedbacktransformright')
					glassne1dong[1].classList.add('choose')
					glassne1dong[1].classList.remove('feedbacktransformright')
					glassne1dong[2].classList.remove('choose')
					glassne1dong[2].classList.add('feedbacktransformleft')
				}else{
					disableEvent();
					document.querySelector('.owl-carousel-1').classList.remove('gorighttt')
					void document.querySelector('.owl-carousel-1').offsetWidth
					var glassne1dong=parent.querySelectorAll('.glassne1')
					var child = document.createElement('div');
					child.className = 'feedbackwidth glassne glassne1';
					var textcontent1cuaglass1=tratextcontentglassne1(glassne1dong)
					child.innerHTML =textcontent1cuaglass1[currentglass1+2];
					setTimeout(function(){
						parent.prepend(child)
				
					},601)
					document.querySelector('.owl-carousel-1').classList.add('gorighttt')
					glassne1dong[2].classList.remove('choose')
					glassne1dong[1].classList.add('choose')
			}
				}
			}else{
				var matches = transformStyle.match(/translateX\((-?\d+(?:\.\d+)?)%\)/);
				var tranfromnwo=parseFloat(matches[1])
				if(number==33.3333){
					var glassne1dong=parent.querySelectorAll('.glassne1')
				glassne1dong[currentglass1].classList.remove("choose")
				currentglass1=currentglass1-1
				glassne1dong[currentglass1].classList.add("choose")
				tranfromnwo=tranfromnwo+33.3333
				parent.style.transform="translateX("+tranfromnwo+"%)"
			}else if(number==50){
				var glassne1dong=parent.querySelectorAll('.glassne1')
				glassne1dong[currentglass1].classList.remove("choose")
				glassne1dong[currentglass1+1].classList.remove("feedbacktransformleft")
				glassne1dong[currentglass1-1].classList.remove("feedbacktransformright")
				currentglass1=currentglass1-1
				glassne1dong[currentglass1].classList.add("choose")
				glassne1dong[currentglass1+1].classList.add("feedbacktransformleft")
				glassne1dong[currentglass1-1].classList.add("feedbacktransformright")
				tranfromnwo=tranfromnwo+50
				parent.style.transform="translateX("+tranfromnwo+"%)"
			}else if(number==80){
				var glassne1dong=parent.querySelectorAll('.glassne1')
				glassne1dong[currentglass1].classList.remove("choose")
				currentglass1=currentglass1-1
				glassne1dong[currentglass1].classList.add("choose")
				tranfromnwo=tranfromnwo+80
				parent.style.transform="translateX("+tranfromnwo+"%)"
			}
		}	
  })
}, 300);
	
    document.querySelector('#magicheadphone').addEventListener('mouseover',function(){

		document.querySelector(".custom-btnhaii").classList.add('glassmagicbayletrenbautroicao')
		document.querySelector(".custom-btnhaii").classList.remove('glassmagicbaylexuongbautroicao')
		document.querySelector('.tainghe2 img').classList.add("tainghe2img")
		document.querySelector('.tainghe1 img').classList.add("tainghe1img")
		document.querySelector(".glassmagicmomoaoao").classList.add("glassmagicmomoaoaoanimation")
		
		

	})
	document.querySelector('#magicheadphone').addEventListener('mouseout',function(){
		document.querySelector(".custom-btnhaii").classList.remove('glassmagicbayletrenbautroicao')
		document.querySelector(".custom-btnhaii").classList.add('glassmagicbaylexuongbautroicao')
		document.querySelector('.tainghe2 img').classList.remove("tainghe2img")
		document.querySelector('.tainghe1 img').classList.remove("tainghe1img")
		document.querySelector(".glassmagicmomoaoao").classList.remove("glassmagicmomoaoaoanimation")
		
	})
	document.querySelector('.glassne99').addEventListener('mouseover',function(){
		document.querySelector(".headphonetrang_block").classList.add("headphonetrang_blockanimation")
		document.querySelector(".headphonetrangmomoaoao").classList.add("headphonetrangmomoaoaoanimation")
		document.querySelector(".headphonetrang_content").classList.add("headphonetrang_contentopacity")
		
		document.querySelector(".taingheotren").classList.add("taingheotrenanimation")
	})
	document.querySelector('.glassne99').addEventListener('mouseout',function(){
		document.querySelector(".headphonetrang_block").classList.remove("headphonetrang_blockanimation")
		document.querySelector(".headphonetrangmomoaoao").classList.remove("headphonetrangmomoaoaoanimation")
		document.querySelector(".headphonetrang_content").classList.remove("headphonetrang_contentopacity")
		
		document.querySelector(".taingheotren").classList.remove("taingheotrenanimation")
	})


  
var banner1_content1strinrg=["Tropical Plants","Seed Packets","House Plants delivered monthly.","2023 Favorites"]

var colorbn01 = document.querySelectorAll(".colorbn01")
var content_banner_001_items=document.querySelectorAll(".content_banner_001_item")
var currentindexcontent1=0
content_banner_001_items[currentindexcontent1].style.display="block"
content_banner_001_items[currentindexcontent1].classList.add("content1xuathienitemlon")
	for(let i = 0 ; i < colorbn01.length ; i ++){
		colorbn01[i].addEventListener("click",function(){
			content_banner_001_items[currentindexcontent1].classList.remove("content1xuathienitemlon")
			content_banner_001_items[currentindexcontent1].style.display="none"
			
			currentindexcontent1=i
			content_banner_001_items[currentindexcontent1].classList.add("content1xuathienitemlon")
			content_banner_001_items[currentindexcontent1].style.display="block"
			
			document.querySelector(".tieudebanner_01 h1").classList.remove("content1xuathienitemlon")
			document.querySelector(".tieudebanner_01 h1").offsetWidth
			document.querySelector(".tieudebanner_01 h1").classList.add("content1xuathienitemlon")
			document.querySelector(".tieudebanner_01 h1").innerHTML=banner1_content1strinrg[currentindexcontent1]
		})
	}

setInterval(function(){
	content_banner_001_items[currentindexcontent1].classList.remove("content1xuathienitemlon")
			content_banner_001_items[currentindexcontent1].style.display="none"
			if(currentindexcontent1==3){
				currentindexcontent1=-1
			}
			currentindexcontent1=currentindexcontent1+1

			content_banner_001_items[currentindexcontent1].classList.add("content1xuathienitemlon")
			content_banner_001_items[currentindexcontent1].style.display="block"
			document.querySelector(".tieudebanner_01 h1").classList.remove("content1xuathienitemlon")
			document.querySelector(".tieudebanner_01 h1").offsetWidth
			document.querySelector(".tieudebanner_01 h1").classList.add("content1xuathienitemlon")
			document.querySelector(".tieudebanner_01 h1").innerHTML=banner1_content1strinrg[currentindexcontent1]
},5000)
