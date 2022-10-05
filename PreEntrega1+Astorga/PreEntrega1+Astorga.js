//console.log("Bienvenido/a al VideoClub, comenzaremos por preguntarte cuáles son tus géneros preferidos...");

const pedirButton = document.querySelector('.pedirGenero')
console.log(pedirButton);

let generos = ["Aventura","Ficción","Romance","Drama","Fantasia","Musical","Comedia","Acción"];
let generosPreferidos = [];

pedirButton.addEventListener('click',() => {

    alert("Bienvenido/a al VideoClub, comenzaremos por preguntarte cuáles son tus géneros preferidos...");
    alert("Si quieres terminar escribe 'Siguiente'");
    pedirGenero();
    mostrarGeneros();
})

function pedirGenero(){
    let genero = prompt("Ingrese un género de peliculas: (Aventura, Ficción, Romance, Drama, Fantasia, Musical, Comedia, Acción)");
    while (genero != "Siguiente") {
        if (validarGenero(genero)) {
            generosPreferidos.push(genero);
        }else{
            console.log("Ingresó un género inválido");
        }
        genero = prompt("Ingrese un género de peliculas: (Aventura, Ficción, Romance, Drama, Fantasia, Musical, Comedia, Acción)");
    }
}

function validarGenero(genero) {
    let boolAux = false;
    for (let i =0;i<generos.length;i++){
        if (genero == generos[i]){
            boolAux = true;
        }
    }
    return boolAux;
}

function mostrarGeneros(){
    let texto = "";
    switch(generosPreferidos.length){
        case 0:
            alert("No ingresó ningún género");
            break;
        case 1:
            alert("Su género preferido es: "+generosPreferidos[0]);
            break;
        default:
            for (let i=0; i<generosPreferidos.length;i++){
                texto += generosPreferidos[i] + " ";
            }
            alert("Estos son tus géneros preferidos: "+texto);
            break;
    }
}