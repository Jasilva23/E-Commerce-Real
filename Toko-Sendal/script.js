 var menuBtn= document.getElementById("menuBtn")
  var sideNav= document.getElementById("sideNav")
  var menu= document.getElementById("menu")


  menuBtn.onclick= function(){
    if (sideNav.style.right   == "-250px"){
      sideNav.style.right = "0";
      menu.src="images/close.png"
    }
    else{
       sideNav.style.right = "-250px";
       menu.src="images/menuicon.jpg"
    }
  }
function openImg(element){
  window.open(element.src);



}
var i = 0;
var t = "Give Your Self in \n a new style this year!"
function typing(){ 
  if(i < t.length)
  {
  document.getElementById("text").innerHTML += t.charAt(i);
  i++;
  setTimeout(typing, 100);
  }
}
typing();