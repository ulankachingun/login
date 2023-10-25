function login(){
    let name = document.getElementById("ner").value;
    let pass = document.getElementById("nuuts").value;
    if(pass < "9999999"){
        alert("too short");
    }else{
        if(name == "admin" && pass == "12345678"){
            alert("yepee");
        }else{
            alert("incorrect");
        }
    }
}



