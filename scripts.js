window.addEventListener("scroll", function () {
  const a =  pageYOffset + "px";
  if(a > 100 + "px"){
      this.document.querySelector('.navbar').classList.add("opacity-header");
  }else{
    this.document.querySelector('.navbar').classList.remove("opacity-header");
  }
});
