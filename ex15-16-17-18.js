/* 15 - Crie um objeto que receba ao menos três propriedades sobre você. */

let meuPerfil = {
    nome: "Lívia",
    cabelo: "ruiva",
    localidade: "Ibura",
    comidaFav: "Lasanha",
}

console.log(meuPerfil);

/* 16 - Adicione uma nova propriedade sem alterar seu objeto inicial. */

            //chave     //valor
meuPerfil['animalFav'] = "gato"
console.log(meuPerfil.animalFav);

/* outra forma */
meuPerfil.corFav = "Verde";
console.log(meuPerfil);

/* 17 - Remova uma propriedade desse objeto. */
delete meuPerfil.cabelo;
console.log(meuPerfil);

/* 18 - Mostre no console todas as propriedades desse objeto. */

                              // é uma função
Object.values(meuPerfil).map(element => console.log(element)); /* element - faz referencia ao valor */
