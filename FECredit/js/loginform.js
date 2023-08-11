var glassflaglogin = 1;
	document.querySelector(".login_glass").addEventListener("click",function(){
	if(glassflaglogin==1){
		document.querySelector(".bolo").style.transform="translateX(100%)"
        document.querySelector(".bolofake").style.transform="translateX(0%)"
		document.querySelector(".login_glass h2").innerHTML="Sign Up"
		document.querySelector(".content_bolo h2").innerHTML="Hello, Friend!"
		document.querySelector(".content_bolo p").innerHTML="Enter your personal details and start journey with us"
		
		glassflaglogin=0
	}else{
		document.querySelector(".bolo").style.transform="translateX(0%)"
        document.querySelector(".bolofake").style.transform="translateX(100%)"
		document.querySelector(".login_glass h2").innerHTML="Sign In"
		document.querySelector(".content_bolo h2").innerHTML="Welcome Back!"
		document.querySelector(".content_bolo p").innerHTML="To keep connected with us please login with your personal info"
		document.querySelector(".signinMessgage").innerHTML=""
		glassflaglogin=1
		
	}
	
  })

document.querySelector(".btnchangetosignup").addEventListener("click",function(){
	document.querySelector(".content_signup").classList.add("changetosignup_1")
	document.querySelector(".content_signin").classList.add("changetosignup_2")
	document.querySelector(".content_signup").classList.remove("changetosignin_2")
	document.querySelector(".content_signin").classList.remove("changetosignin_1")

})

document.querySelector(".btnchangetosignin").addEventListener("click",function(){
	
	document.querySelector(".content_signup").classList.add("changetosignin_2")
	document.querySelector(".content_signin").classList.add("changetosignin_1")
	document.querySelector(".content_signup").classList.remove("changetosignup_1")
	document.querySelector(".content_signin").classList.remove("changetosignup_2")

})


function checkNull(input){
	return input?true:false
}

document.querySelector(".Signupchecknull").addEventListener("click",function(){
	signupinputs = document.querySelectorAll(".signupcheckull")
	for(let i of signupinputs){
		if(!checkNull(i.value)){
			i.style.borderBottom = "2px solid #df1212"
			document.querySelector(".signupMessage").innerHTML="Please enter full information <i class='fa-regular fa-circle-xmark'></i>"
			spaninputreds = i.parentElement.querySelectorAll("span")
			for(let j of spaninputreds){
				j.style.color="#df1212"
			}
		}else{
			i.style.borderBottom = "2px solid #fff"
			document.querySelector(".signupMessage").innerHTML=""
		}
	}
})

signupinputs = document.querySelectorAll(".signupcheckull")
for(let i of signupinputs){
	i.addEventListener("click",function(){
		i.style.borderBottom = "2px solid #fff"
		spaninputreds = i.parentElement.querySelectorAll("span")
			for(let j of spaninputreds){
				j.style.color="#fff"
			}
	})
}



document.querySelector(".signinbtnhaha_haha").addEventListener("click",function(){
	document.querySelector(".signinMessgage").innerHTML="Wrong account or password <i class='fa-regular fa-circle-xmark'></i>"
	
})








document.querySelector(".Signupchecknullmobile").addEventListener("click",function(){
	signupinputs = document.querySelectorAll(".signupcheckullmobile")
	for(let i of signupinputs){
		if(!checkNull(i.value)){
			i.style.borderBottom = "2px solid #df1212"
			document.querySelector(".signupMessagemobile").innerHTML="Please enter full information <i class='fa-regular fa-circle-xmark'></i>"
			spaninputreds = i.parentElement.querySelectorAll("span")
			for(let j of spaninputreds){
				j.style.color="#df1212"
			}
		}else{
			i.style.borderBottom = "2px solid #fff"
			document.querySelector(".signupMessagemobile").innerHTML=""
		}
	}
})

signupinputs = document.querySelectorAll(".signupcheckullmobile")
for(let i of signupinputs){
	i.addEventListener("click",function(){
		i.style.borderBottom = "2px solid #fff"
		spaninputreds = i.parentElement.querySelectorAll("span")
			for(let j of spaninputreds){
				j.style.color="#fff"
			}
	})
}


document.querySelector(".Signinchecknullmobile").addEventListener("click",function(){
	document.querySelector(".signinMessageMb").innerHTML="Wrong account or password <i class='fa-regular fa-circle-xmark'></i>"
	
})