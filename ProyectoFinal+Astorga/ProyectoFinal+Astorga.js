
import generos from "./generos.mjs";
import peliculas from "./peliculas.mjs";

const pedirButton = document.querySelector('.pedirGenero')
const solicitudesButton = document.querySelector('.solicitudes');
const contactoButton = document.querySelector('.contactobtn');
const inicioButton = document.querySelector('.inicio');

const cardsPeliculas = document.getElementById("peliculas");
const lista = document.querySelector('.listado');






let peliculasSolicitadas = [];
let generosPreferidos = [];
inicio();

pedirButton.addEventListener('click',() => {

    alert("Bienvenido/a al VideoClub, comenzaremos por preguntarte cuáles son tus géneros preferidos...");
    alert("Si quieres terminar escribe 'Siguiente'");
    pedirGenero();
    mostrarGeneros();
    filtrarPorGenero();
})

solicitudesButton.addEventListener('click',() => {

    solicitudes();

})

inicioButton.addEventListener('click', ()=> {

    inicio();
    
})

contactoButton.addEventListener('click',() => {

    contacto();
})



function pedirGenero(){
    let gen = prompt("Ingrese un género de peliculas: (Aventura, Ficción, Romance, Drama, Fantasia, Musical, Comedia, Acción)");
    while (gen != "Siguiente") {
        if (validarGenero(gen)) {
            generosPreferidos.push(generos.find(({nombre}) => nombre == gen));
        }else{
            console.log("Ingresó un género inválido");
        }
        gen = prompt("Ingrese un género de peliculas: (Aventura, Ficción, Romance, Drama, Fantasia, Musical, Comedia, Acción)");
    }
}

function validarGenero(genero) {
    let boolAux = false;
    for (let i =0;i<generos.length;i++){
        if (generos.find(({nombre}) => nombre == genero)){
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
            alert("Su género preferido es: "+generosPreferidos[0].nombre);
            break;
        default:
            for (let i=0; i<generosPreferidos.length;i++){
                texto += generosPreferidos[i].nombre + " ";
            }
            alert("Estos son tus géneros preferidos: "+texto);
            break;
    }
}

function inicio(){
    lista.innerHTML = ``;
    cardsPeliculas.innerHTML = ``;
    for (const pelicula of peliculas){
        cardsPeliculas.innerHTML += `
                <div class="card">
                    <img src=${pelicula.foto} class="card-imagen">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <p class="card-text">Starring: ${pelicula.starring}</p>
                        <p class="card-text">Director: ${pelicula.director}</p>
                        <p class="card-text">Género: ${pelicula.genero.nombre}</p>
                        <button id=${pelicula.id} class='btnAlquilar'>Alquilar</button>
                    </div>
                </div>   
            `;

    }
    const alquilarButton = document.querySelectorAll('.btnAlquilar');
    console.log(alquilarButton);

    alquilarButton.forEach(e  => e.addEventListener("click", (e) => {

        console.log(e.currentTarget.id);
        agregarAlquilar(e.currentTarget.id);
        

    }))
        

    function agregarAlquilar(idPel){

        let peliculaSolicitadaJson = JSON.stringify(peliculas.find(({id})=> id == idPel));

        verificaSolicitud(peliculaSolicitadaJson);
        
    }
        
    function verificaSolicitud(peliculaSolicitadaJson){

        let peliculaSolicitada = JSON.parse(peliculaSolicitadaJson);
        
        let objClone = { ...peliculaSolicitada };

        console.log(peliculasSolicitadas);
        (peliculasSolicitadas.find(({id})=>id == objClone.id) || peliculasSolicitadas.length >= 3) ? 
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya ha solicitado esta pelicula o tiene tres solicitudes realizadas',
        })
        
        : 
        (Swal.fire(
            'Solicitud realizada!',
            'Le avisaremos a la brevedad si la pelicula está disponible!',
            'success'
        ),peliculasSolicitadas.push(objClone));

        
    }

}

function solicitudes(){
    lista.innerHTML = ``;
    cardsPeliculas.innerHTML = ``;
    
    for (const pelicula of peliculasSolicitadas){
        cardsPeliculas.innerHTML += `
                <div class="card">
                    <img src=${pelicula.foto} class="card-imagen">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <p class="card-text">Starring: ${pelicula.starring}</p>
                        <p class="card-text">Director: ${pelicula.director}</p>
                        <p class="card-text">Género: ${pelicula.genero.nombre}</p>
                    </div>
                </div>   
            `;

    }
    
}

function contacto(){
    cardsPeliculas.innerHTML = ``;

    Swal.fire({
        icon: 'info',
        title: 'Conoce a nuestro STaff!',
        text: 'Estos son las trabajadoras y trabajadores del videoclub future!',
    })

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=> resp.json())
    .then((data) => {
        console.log(data);
        let tope = 1;
        data.forEach((post) =>{
            if (tope <= 4){
                cardsPeliculas.innerHTML += `
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">${post.name}</h3>
                            <p class="card-text">Alias: ${post.username}</p>
                            <p class="card-text">Contacto: ${post.email}   ${post.phone}</p>
                        </div>
                    </div>   
                `;
                tope++;
            }
        })
    }
    
    
    );


}