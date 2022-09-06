import { Animal } from "./animal";

export class Cachorro extends Animal{
    som(): void {
        console.log("auau")
    }
    acao(): void {
        console.log("Correndo como um cachorro")
    }
    
}