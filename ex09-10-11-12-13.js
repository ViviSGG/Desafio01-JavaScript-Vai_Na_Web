/* 09 - Crie um array que receba 5 itens e exiba no console. */

let jogos = ["League of Legends", "Fortnite", "Clash Royale", "Zelda", "God of War"];

console.log(jogos);

/* 10 - Utilize um método para adicionar um nome ao início do array. */
jogos.splice(0, 0, "Free Fire");
console.log(jogos);

/* 11 - Utilize um método para remover o último nome do array. */
jogos.splice(5,1);
console.log(jogos);

/* 12 - Utilize um método para adicionar dois nomes ao fim do array. */
jogos.push("Super Mário", "Stardew Valley");
console.log(jogos);

/* 13 - Utilize um método para remover o primeiro nome do array. */
jogos.splice(0, 1);
console.log(jogos);
