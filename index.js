let navbar = document.getElementById("navbar");

document.addEventListener("scroll",()=>{

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }



})