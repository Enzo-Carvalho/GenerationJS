/*

Conta Banco
     Atributos - agencia, conta, titular, saldo
    Métodos - saca, depositar, verSaldo

Conta Corrente
    Atributo - limite
    Métodos - alterarLimite

*/

import PromptSync from "prompt-sync";
import { ContaCorrente } from "./src/contacorrente";

const prompt = PromptSync()

let contaCorrente = new ContaCorrente(
    "00000",
    "00000-0",
    "Neymar",
    1500.0,
    1000
)

contaCorrente.consultarSaldo()

contaCorrente.alterarlimite(1000)

contaCorrente.sacar(1500)

contaCorrente.consultarSaldo

function add(a:string, b: string): string

function add ( a:number, b:number): number

function add(a:any, b:any): any{
    return a + b;
}