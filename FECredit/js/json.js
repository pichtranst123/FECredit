angular.module('myApp', [])
.controller('MainController', function($scope, $http) {
   
    $http.get('js/Data/Json/Plants.json') 
    .then(response => {
        $scope.plants = response.data;
        $(document).ready(function(){
        $(".owlcuaproduct").owlCarousel({
            margin: 30,
            loop: true,
            autoplay: 5000,
          
          
          navText: [
              "<i class='fa-solid fa-chevron-left'></i>",
              "<i class='fa-solid fa-chevron-right'></i>"
          ],
          responsive: {
              0:{
                  items: 1,
                  nav: true,
              },
              576:{
                  items: 2,
                  nav: true,
              },
              768:{
                  items: 3,
                  nav: true,
              },
              992:{
                  items: 4,
                  nav: true,
              },
              1200:{
                  items: 4,
                  nav: true,
              },
              
          }
      });


    });

    $scope.showbuymodal = (plant) => {
        
        document.querySelector(".showproductmodal").style.display ="block";
        document.querySelector(".productdetailthongtinmua h2").innerHTML=plant.title
        document.querySelector("#giaproductdetail").innerHTML="$"+plant.price
        document.querySelector(".imgchoosenproduct").src="imgs/Plant-images/"+plant.img
        document.querySelector("#tinhnangsp ul li p").innerHTML=plant.content
        document.querySelector(".productdetailthongtinmuanho h2").innerHTML=plant.title
        document.querySelector("#giaproductdetailnho").innerHTML="$"+plant.price
        document.querySelector(".imgchoosenproductmobile").src="imgs/Plant-images/"+plant.img
        document.querySelector("#tinhnangspnho ul li p").innerHTML=plant.content

    };
    $scope.closeproductmodal=() =>{
    
        document.querySelector(".showproductmodal").style.display="none"
        
    }
})
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    $http.get('js/Data/Json/Blogs.json') 
    .then(response => {
        $scope.blogs = response.data;
        console.log($scope.blogs)
        $(document).ready(function(){
		  
            $(".owl-car").owlCarousel({
                margin: 30,
                loop: true,
                autoplay:true,
                
                
                navText: [
                    "<i class='fa-solid fa-chevron-left'></i>",
                    "<i class='fa-solid fa-chevron-right'></i>"
                ],
                responsive: {
                    0:{
                        items: 1,
                        nav: true,
                    },
                    576:{
                        items: 1,
                        nav: true,
                    },
                    768:{
                        items: 2,
                        nav: true,
                    },
                    992:{
                        items: 3,
                        nav: true,
                    },
                    1200:{
                        items: 3,
                        nav: true,
                    },
                    
                }
            });
            

  
  });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    $scope.handleClick = function(event, direction) {
        event.stopPropagation(); // Ngăn sự kiện nổi bọt tại phần tử con
        
        var inputField = event.target.closest(".number-spinner").querySelector("input");
        var currentValue = parseInt(inputField.value);
        
        if (direction === 'increment') {
            inputField.value = currentValue + 1;
        } else if (direction === 'decrement') {
            inputField.value = Math.max(currentValue - 1, 1); // Đảm bảo không âm
        }
    };
});
fetch('js/Data/Json/Customers.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(cus => {
        let div = document.createElement("div")
        div.classList.add("feedbackwidth")
        div.classList.add("glassne")
        div.classList.add("glassne1")
        div.innerHTML=`
        <div class="row justify-content-center">
									<div class="col-4 avata">
										<img src="imgs/Customer-images/${cus.img}" class="img-fluid">
									</div> <!--avata-->							
								</div> <!-- row 01 -->
								<div class="col-12 namefeedback">								
                                ${Array.from({ length: cus.rate }, (_, index) => '<i class="fa-solid fa-star"></i>').join('')}
									<h2>${cus.name}</h2>
									<p>${cus.review}</p>
									<br>
								</div> <!--namefeedback-->	
					</div> <!--glassne-->
        `
        document.querySelector(".owl-carousel-1").appendChild(div)
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });