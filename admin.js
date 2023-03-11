let nota = document.getElementById("nota");

let consejo = document.getElementById("con");

let cal = document.getElementById("cal");
cal.addEventListener("click" , (e)=>{

    let not = parseFloat(nota.value)
    if(not == 1){
        consejo.innerText="es 1"
        console.log("si es 1")
    }
    else{
        consejo.innerText="no es 1"
        console.log("no es 1")
    }
})