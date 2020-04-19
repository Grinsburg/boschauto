window.addEventListener("scroll", function () {
  const a = pageYOffset + "px";
  if (a > 100 + "px") {
    this.document.querySelector(".navbar").classList.add("opacity-header");
  } else {
    this.document.querySelector(".navbar").classList.remove("opacity-header");
  }
});

$("#popoverData1").popover();
$("#popoverData2").popover();
$("#popoverData3").popover();
$("#popoverData4").popover();
$("#popoverData5").popover();
$("#popoverData6").popover();

function anchor() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

anchor();
