var x = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

   
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}