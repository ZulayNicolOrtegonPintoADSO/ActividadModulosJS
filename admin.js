let nombre =document.getElementById("nombre");
let nota = document.getElementById("nota");

let consejo = document.getElementById("con");

let letra = ""

let cal = document.getElementById("cal");
cal.addEventListener("click" , (e)=>{

    let list =[]
    let nom = nombre.value
    let letr = letra.value
    let not = parseFloat(nota.value)
    console.log(nom , not)

    if (nom !== "" & not >= 0) {
        list.push(nom)
        list.push(not)
        consejo.innerText= list

        if(not >= 90 && not <= 100){
            let letra = "A"
            consejo.innerText= nom + "\n Tú calificación es la letra " + letra
        }
        else if(not >= 80 && not <= 89){
            let letra = "B"
            consejo.innerText= nom + "\n Tú calificación es la letra "  + letra
        }
        else if(not >= 70 && not <= 79){
            let letra = "C"
            consejo.innerText= nom + "\n Tú calificación es la letra "  + letra
        }
        else if(not >= 60 && not <= 69){
            let letra = "D"
            consejo.innerText= nom + "\n Tú calificación es la letra "  + letra
        }
        else if(not < 60 && not >0){
            let letra = "E"
            consejo.innerText= nom + "\n Tú calificación es la letra "  + letra
        }
        else if(not == 0){
            let letra = "Z"
            consejo.innerText= nom + "\n Tú calificación es la letra "  + letra
        }
        else{
            consejo.innerText="El puntaje indicado no está en el rango de calificaciones, por favor, vuelve a intentarlo"
        }
    }

    else{
        alert("Por favor completa ambos campos: Nombre y Nota")
    }   
})



