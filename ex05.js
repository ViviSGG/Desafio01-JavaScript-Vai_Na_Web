/* 05 - crie uma função que receba nome, idade , e um estilo musical preferido (parâmetros) e exiba no console */

function perfil(nome, idade, estiloMusical) {
    console.log(`nome: ${nome}, idade: ${idade}, gosto musical: ${estiloMusical[1]}`);
}

let nome = "Lívia";
let idade = 20;
let estiloMusical = ["rap", "pop", "brega funk"];

perfil(nome, idade, estiloMusical);
