function collapse(name, id) {
    var div = document.getElementById(name);
    var Chck = document.getElementById(id);
    if (Chck.innerHTML == "▲") {

        div.style.display = 'none';
        Chck.innerHTML = "▼";

    }
    else if (Chck.innerHTML == "▼") {
        div.style.display = 'block';
        Chck.innerHTML = "▲";

    }
        
    
 }