import { Animal} from "./animal";

export class Cavalo extends Animal{
    som(): void {
        console.log("pocotó");
    }
    acao(): void {
        console.log("Correndo estilo cavalo")
    }
    
}