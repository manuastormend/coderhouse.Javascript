
function genero(id,nombre){
    this.id = id;
    this.nombre = nombre;
}

let generos = [];

const Aventura = new genero(1,"Aventura");
const Infantil = new genero(2, "Infantil");
const Romance = new genero(3, "Romance");
const Fantasia = new genero(4, "Fantasía");
const Drama = new genero(4, "Drama");
const Comedia = new genero(5, "Comedia");
const Musical = new genero(5, "Musical");

generos.push(Aventura);
generos.push(Infantil);
generos.push(Romance);
generos.push(Drama);
generos.push(Comedia);
generos.push(Fantasia);
generos.push(Musical);


export  default generos;