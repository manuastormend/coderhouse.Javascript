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

let peliculas = [];
function pelicula(id, nombre, fechaCreacion, director, starring, genero,foto){
    this.id = id;
    this.nombre = nombre;
    this.fechaCreacion = fechaCreacion;
    this.director = director;
    this.starring = starring;
    this.genero = genero;
    this.foto = foto;
}


const laIslaSiniestra = new pelicula(1,"La Isla Siniestra",2010,"Martin Scorsese","Leonardo Dicaprio",generos[0],"https://www.mdzol.com/u/fotografias/m/2021/1/14/f1456x819-1006310_1176680_2646.jpg");

peliculas.push(laIslaSiniestra);

console.log(peliculas[0]);
let card = document.getElementById("peliculas");

for (const pelicula of peliculas){
    card.innerHTML += `
            <div class="card">
                <img src=${pelicula.foto} class="card-imagen">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.nombre}</h5>
                    <p class="card-text">Starring: ${pelicula.starring}</p>
                    <p class="card-text">${pelicula.director}</p>
                    <p class="card-text">Género: ${pelicula.genero}</p>
                    <button id='btn${pelicula.id}'>Alquilar</button>
                </div>
            </div>   
        `;

}