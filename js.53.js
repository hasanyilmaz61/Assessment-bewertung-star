
    
$("#star>i").mouseenter(function () { 
    
   $(this).addClass("Aktiv");
   $(this).prevAll().addClass("Aktiv")
  


});

$("#star>i").mouseleave(function () { 
   $(this).removeClass("Aktiv")
   $(this).prevAll().removeClass("Aktiv")
});

    
    
$("#star>i").click(function () { 
  
   $(this).siblings().removeClass("Geklict")
   $(this).addClass("Geklict");
   $(this).prevAll().addClass("Geklict")
  
   

});


$("button").click(function () { 

   let klikt=$("#star>.Geklict");
  
  if (klikt.length==0) {
   alert("sie haben noch nicht ein stern gewält")
  }
  else
  alert("sie haben"+" "+klikt.length+" "+ "sterne gewält")
   

});


