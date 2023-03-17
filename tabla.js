//Enlistar caracteres en la tabla


//vinculo variables 

let nombre =document.getElementById("nombre"); 
let nota = document.getElementById("nota");

let consejo = document.getElementById("con");

let letra = "a"
cont = 0

//enlazo el boton con la función
let funcion = document.getElementById("funcionlist");
funcion.addEventListener("click" , (e)=>{

  cont +=1 //creo un contador

  let nom = nombre.value //pido el contenido de la variable
  let not = parseFloat(nota.value)
  
  if (nom !== "" & not >= 0) { // creo la opción a ejecutar si tiene los campos llenos
    let listar = document.querySelector("#listar")

    let fila = document.createElement("TR");

  
    let columnau = document.createElement("TD");
    let colu = document.createTextNode(cont);
    columnau.appendChild(colu)

    let columnad = document.createElement("TD");
    let cold = document.createTextNode(nom);
    columnad.appendChild(cold)

    let columnat = document.createElement("TD");
    let colt = document.createTextNode(not);
    columnat.appendChild(colt)

    let columnac = document.createElement("TD");
    let colc = document.createTextNode(letra);
    columnac.appendChild(colc);

    
    fila.appendChild(columnau); 
    fila.appendChild(columnad);
    fila.appendChild(columnat);
    fila.appendChild(columnac);
    listar.appendChild(fila);
  }

  else{ // creo la opción dar alerta si tiene los campos vacíos
    cont -= 1
    alert("No se pueden listar valores Null (vacíos)")
  }
})


