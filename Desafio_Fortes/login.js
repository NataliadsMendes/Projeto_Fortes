function logar(){
    let username =document.getElementById("entema").value
    let psw =document.getElementById("pswse").value
    if (username == "Administrador" && psw == "adm123")
        window.open(URL= "home.html","_self") 
    else if (username == "Donatario01" && psw == "dona123")
        window.open("homepage.html","_self")
    else {
        window.alert("Usuario Invalido")
    }
}