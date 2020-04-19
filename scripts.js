window.addEventListener("scroll", function () {
  const a =  pageYOffset + "px";
  if(a > 100 + "px"){
      this.document.querySelector('.navbar').classList.add("opacity-header");
  }else{
    this.document.querySelector('.navbar').classList.remove("opacity-header");
  }
});

$('#popoverData1').popover();
$('#popoverData2').popover();
$('#popoverData3').popover();
$('#popoverData4').popover();
$('#popoverData5').popover();
$('#popoverData6').popover();