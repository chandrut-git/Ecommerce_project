document.addEventListener("DOMContentLoaded", function () {
    var pcontainer = document.getElementById("products");
    var search = document.getElementById("search");

    if (!pcontainer || !search) {
        console.error("❌ Search elements not found!");
        return;
    }

    var plist = pcontainer.querySelectorAll(".product_conatiner"); // ✅ Select the correct elements

    search.addEventListener("keyup", function (event) {
        var entered_value = event.target.value.toUpperCase();

        plist.forEach(function (item) {
            var pname = item.querySelector("p").textContent;
            if (pname.toUpperCase().indexOf(entered_value) < 0) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    });
});
