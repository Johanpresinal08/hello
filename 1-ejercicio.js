let indiceActual = 0; 
 
const colores = [ 
  document.getElementById("circuloRojo"), 
  document.getElementById("circuloAmarillo"), 
  document.getElementById("circuloVerde") 
]; 
 
document.getElementById("miBoton").addEventListener("click", () => { 
    
    for(let i = 0; i < colores.length; i++){ 
 
        colores[i].style.background = 'grey';     
      
    } 
 
    if(indiceActual === 0) { 
        colores[0].style.background = 'red'; 
 
    } else if (indiceActual === 1) { 
        colores[1].style.background = 'yellow'; 
 
    } else if (indiceActual === 2) { 
        colores[2].style.background = 'green';     } 
 
 indiceActual++ 
 
  if (indiceActual === colores.length) { 
    indiceActual = 0; 
  } 
 
}); 
 
