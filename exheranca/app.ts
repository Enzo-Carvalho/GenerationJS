import PromptSync from "prompt-sync";
import { Animal } from "./src/animal";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica} from "./src/preguica";

let animal: Animal
const prompt = PromptSync()

console.log ("(1)Preguiça - (2)Cavalo - (3)Cachorro")
let opc = Number(prompt("Deseja criar que animal?"))

if(opc == 1){
    let nome = prompt("Digite o nome: ")
    let idade = Number(prompt("Digite a idade: "))
    animal = new Preguica(nome, idade)
    animal.acao()
    animal.som()
}

if(opc ==2){
    let nome = prompt("Digite o nome: ")
    let idade = Number(prompt("Digite a idade: "))
    animal = new Cavalo(nome, idade)
    animal.acao()
    animal.som()
}

if(opc == 3) {
    let nome = prompt("Digite o nome: ")
    let idade = Number(prompt("Digite a idade: "))
    animal = new Cachorro(nome, idade)
    animal.acao()
    animal.som()
}
