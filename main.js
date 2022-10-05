

function move(e, p, c, n){
    var length = document.getElementById(c).value.length;
    var maxlength =  document.getElementById(c).getAttribute("maxlength");
    if(length == maxlength){
        if(n != ""){
            document.getElementById(n).focus();
        }
    }
    if(e.key === "Backspace"){
        if(p != ""){
            document.getElementById(p).focus();
        }
    }
    if(n === "submit"){
            document.getElementById(n).click();
    }
}