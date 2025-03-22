var snav=document.querySelector(".side_nav")

function closenav(){
    snav.style.left="-60%";
}
function opennav(){
    snav.style.left="0";
}


function form_dis(event){
    event.preventDefault();
    var name=document.getElementById("name").value.trim();
    var email=document.getElementById("email").value.trim();
    var msg=document.getElementById("msg").value.trim();
    if(name=="" || email==""||msg==""){
        alert("some fields aare missing");
        return;
    }
    var d=document.getElementById("form");
    d.style.display="none";

    document.querySelector("#thnx_msg h1").style.display = "block";
}