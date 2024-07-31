var search = document.getElementById("search");
var productcontainer = document.getElementById("product");
var productlist = productcontainer.getElementsByClassName("products-box");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();
    for (var i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent.toUpperCase();
        if (productname.indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none";
        } else {
            productlist[i].style.display = "block";
        }
    }
});
