/*capturando tamanho da tela*/ 
window.onresize = function(){
    let widthWindow = document.documentElement.clientWidth
    if(widthWindow < 610){
        document.getElementById("opcoesMenu").className = "hide";
    } else {
        document.getElementById("opcoesMenu").className = "";
    }
    
    console.log(widthWindow)
}

function showOrHide(){

    let opcoesMenu = document.getElementById("opcoesMenu").className

    if(opcoesMenu == "hide"){
        document.getElementById("opcoesMenu").className = "";
        document.getElementById("burgerMenu").className = "burger clicked";        
    } else {
        document.getElementById("opcoesMenu").className = "hide";
        document.getElementById("logo").className = "menuHide"
        document.getElementById("burgerMenu").className = "burger";
    }

    console.log(opcoesMenu)
}

