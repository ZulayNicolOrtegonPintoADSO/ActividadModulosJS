let nom =document.getElementById("nombre");
let nota = document.getElementById("nota");

let consejo = document.getElementById("con");

let cal = document.getElementById("cal");
cal.addEventListener("click" , (e)=>{
    let not = parseFloat(nota.value)
    if(not >= 90 && not <= 100){
        consejo.innerText= nom.value + "\n Tú calificación es la letra A"
    }
    else if(not >= 80 && not <= 89){
        consejo.innerText= nom.value + "\n Tú calificación es la letra B"
    }
    else if(not >= 70 && not <= 79){
        consejo.innerText= nom.value + "\n Tú calificación es la letra C"
    }
    else if(not >= 60 && not <= 69){
        consejo.innerText= nom.value + "\n Tú calificación es la letra D"
    }
    else if(not < 60 && not >0){
        consejo.innerText= nom.value + "\n Tú calificación es la letra E"
    }
    else if(not == 0){
        consejo.innerText= nom.value + "\n Tú calificación es la letra Z"
    }
    else{
        consejo.innerText="El puntaje indicado no está en el rango de calificaciones, por favor, vuelve a intentarlo"
    }
})