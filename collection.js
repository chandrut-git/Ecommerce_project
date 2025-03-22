var pcontainer=document.getElementById("products");
var search=document.getElementById("search");
var plist=pcontainer.querySelectorAll("div");

search.addEventListener("keyup",function(event){
    var entered_value=event.target.value.toUpperCase();
    for(count =0;count<plist.length;count++){
        var pname=plist[count].querySelector("p").textContent;
        if(pname.toUpperCase().indexOf(entered_value) < 0){
            plist[count].style.display="none";
        }
        else{
            plist[count].style.display="block";
        }
    }
})