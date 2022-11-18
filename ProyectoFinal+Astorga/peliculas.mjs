

import generos from "./generos.mjs";

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

const laIslaSiniestra = new pelicula(1,"La Isla Siniestra",2010,"Martin Scorsese","Leonardo Dicaprio",generos.find(({nombre}) => nombre == "Aventura"),"https://www.mdzol.com/u/fotografias/m/2021/1/14/f1456x819-1006310_1176680_2646.jpg");
const buscandoANemo = new pelicula(2,"Buscando a Nemo",2003,"Andrew Stanton","Alexander Gould",generos.find(({nombre}) => nombre == "Comedia"),"https://frasesdelavida.com/wp-content/uploads/2019/01/frases-de-Buscando-a-nemos.jpg");
const mujercitas = new pelicula(3,"Mujercitas",2019,"Greta Gerwig","Emma Watson",generos.find(({nombre}) => nombre == "Romance"),"https://pics.filmaffinity.com/Mujercitas-708149084-large.jpg");

peliculas.push(buscandoANemo);
peliculas.push(laIslaSiniestra);
peliculas.push(mujercitas);




export default peliculas;