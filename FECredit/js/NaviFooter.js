



	
	//navi

  var iconnaviitem_asearch = document.querySelector(".iconnaviitem_asearch")
  iconnaviitem_asearch.addEventListener("mouseover",function(){
      iconnaviitem_asearch.classList.add("iconaviitmhovermomoaoao")
      document.querySelector(".Navisearchinput").classList.add("Navisearchinputasd")
      document.querySelector(".Navisearchinput").placeholder ="Search..."
  
  })
  var Navisearchinputflag=1;
  document.querySelector('.Navisearchinput').addEventListener("click",function(){
      Navisearchinputflag=0
  })
  document.querySelector('.Navisearchinput').addEventListener("blur",function(){  
      iconnaviitem_asearch.classList.remove("iconaviitmhovermomoaoao")
      document.querySelector(".Navisearchinput").classList.remove("Navisearchinputasd")
      Navisearchinputflag=1;
  })
  iconnaviitem_asearch.addEventListener("mouseout",function(){
      if(Navisearchinputflag==1){
      iconnaviitem_asearch.classList.remove("iconaviitmhovermomoaoao")
      document.querySelector(".Navisearchinput").classList.remove("Navisearchinputasd")
  }
  })
  
  var iconnaviitem_asearchhh = document.querySelector(".iconnaviitem_asearchhhh")
  iconnaviitem_asearchhh.addEventListener("click",function(){
    document.querySelector(".navimobliesearchsearchseachblock").style.display="block"
    document.querySelector(".navimobliesearchsearchseachblock").classList.add("navimobliesearchsearchseachblockanimation")
    document.querySelector(".navimobilesearhciputttt").classList.add("navimobilesearhciputanimationnnnnnnnnn")
    document.querySelector(".navimobliesearchsearchseachblock").classList.remove("navimobliesearchsearchseachblockreverse")
    
  })

  var iconnaviitem_asearchhh_X = document.querySelector(".navimobliesearchblock_X")
  iconnaviitem_asearchhh_X.addEventListener("click",function(){
    setTimeout(function(){
      document.querySelector(".navimobliesearchsearchseachblock").style.display="none"
    },500)
   
    document.querySelector(".navimobliesearchsearchseachblock").classList.remove("navimobliesearchsearchseachblockanimation")
    document.querySelector(".navimobilesearhciputttt").classList.remove("navimobilesearhciputanimationnnnnnnnnn")
    document.querySelector(".navimobliesearchsearchseachblock").classList.add("navimobliesearchsearchseachblockreverse")
  })
  
  
  
  
  
  
  
  
  
  
  $(document).ready(function(){
        
    $("#navimobie").hide();
    $("#black").hide();
     
    $("#iconbarmobie").click(function(){
      $("#navimobie").slideToggle();
      $("#black").fadeToggle();
      $("#bgmobi").hide();
    });
  
    $("#black").click(function(){
      $("#navimobie").slideUp();
      $(this).fadeOut();
    });
  
   });
  
  
  
  
  
  
  
  
  var menuToggleflag=true
    
    document.querySelector('#checkbox').addEventListener('click',function(){
      if(menuToggleflag){
        document.querySelector('.navimobile_block').style.transform="translateX(0)";
        nav.classList.add("nav_scrolled");
  
      }else{
        document.querySelector('.navimobile_block').style.transform="translateX(-100%)"
        nav.classList.remove("nav_scrolled");
        
      }
      
      menuToggleflag=!menuToggleflag;
      
    })
  
  
    
  var nav = document.querySelector("#bgnavimobie");
  var bgnavi = document.querySelector("#bgnavi");
  var scrollPosition = 0;
  
  window.addEventListener("scroll", function() {
    // Lấy vị trí cuộn của trang
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScrollPos > scrollPosition) {
      // Cuộn xuống
      nav.classList.add("nav_scrolled");
    bgnavi.classList.add("navimomoaoao");
    }
     if (currentScrollPos ==0)
    {
      // Cuộn lên
    bgnavi.classList.remove("navimomoaoao");
      nav.classList.remove("nav_scrolled");
    }
  
    scrollPosition = currentScrollPos;
  
  
  });
  
  // Accordion
  $(document).ready(function() {
  
  $(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
    numPanelOpen = $(accordionId + ' .collapse.in').length;
    
    $(this).toggleClass("active");
  
    if (numPanelOpen == 0) {
    openAllPanels(accordionId);
    } else {
    closeAllPanels(accordionId);
    }
  })
  
  openAllPanels = function(aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  }
     
  });
  

  
  document.querySelector(".n-linkheadphone").addEventListener("mouseover",function(){
      document.querySelector(".doropdao").classList.add("doropdaoanimation")
    })
    document.querySelector(".n-linkheadphone").addEventListener("mouseout",function(){
      document.querySelector(".doropdao").classList.remove("doropdaoanimation")
    })
    document.querySelector(".doropdao").addEventListener("mouseover",function(){
      document.querySelector(".doropdao").classList.add("doropdaoanimation")
    })
    document.querySelector(".doropdao").addEventListener("mouseout",function(){
      document.querySelector(".doropdao").classList.remove("doropdaoanimation")
    })
  