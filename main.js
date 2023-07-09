// to display header in screnn small than 1000px
let menu =document.getElementById("menu")
let header =document.querySelector("header");
menu.addEventListener("click",() => {
header.classList.toggle("show");
  
})

// Scroll
onscroll=function(){

  if (scrollY > 450) {
      up.style.display="block";
  }
  else if(scrollY<450)
  {
      up.style.display="none";
  }
}
up.onclick=function(){
  scroll(0,0);
}