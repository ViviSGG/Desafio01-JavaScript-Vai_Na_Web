/* 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
Na propriedade amigos, adicione ao menos 4 amigos.
 */

let cadastro = [
    {
        nome: "Lívia",
        idade: 20,
        telefone: 44028922,
        amigos: ["Kelly", "Abner", "Jhonata", "Ana Paula", "Julia", "Maiara", "Rebeca"]
    },
    {
        nome: "Kelly",
        idade: 19,
        telefone: 12345678,
        amigos: ["Giovanna", "Guilherme", "Matheus", "Joyce", "Elisa"]
    },
    {
        nome: "Ana Paula",
        idade: 23,
        telefone: 87654321,
        amigos: ["Victor", "Matheus", "Clecio", "Bruna", "Karol"]
    },
    {
        nome: "Jessyca",
        idade: 19,
        telefone: 88888888,
        amigos: ["Maurício", "Lívia", "Ana Cristina", "Abner"]
    },
    {
        nome: "Arthur",
        idade: 20,
        telefone: 99999999,
        amigos: ["Glyson", "Diêgo", "Apolo", "Jhonata"]
    }
]
/* 20 - Mostre no console o nome de um amigo de cada lista. */
Object.values(cadastro).map(element => console.log(`Amigo de ${element.nome} é ${element.amigos[0]}`));