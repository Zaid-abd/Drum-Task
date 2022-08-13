
for (i=0;i<document.querySelectorAll(".drum").length;i++){
   
    
document.querySelectorAll(".drum")[i].addEventListener("click",run)

    
   
    document.addEventListener("keypress",function run1(Event){
                              
     y=Event.key
     run2(y)
                              
                              })
    
   
    
    

}

 function run(){
    var audio =new Audio("sounds/"+this.innerHTML+".mp3")
    audio.play()
    
    
}

 function run2(yy){
     
    var audio =new Audio("sounds/"+yy+".mp3")
    audio.play()
    
    
}



