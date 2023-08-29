var Nome
var Email
var num =0;
var saque = 0;
var deposito = 0;
saldo = 1000;


function Sacar (saque){
     saldo = saldo - saque
     return saldo 
}

function Depositar (deposito){
    saldo = saldo + deposito
    return saldo 
}

function escrever (quadro){
   info = "Usuario numero" + (++num) + "\n";
   info += "Nome: "  +  Nome  + "\n"; 
   info += "Email: "  +  Email + "\n";
   if(deposito != 0){
    info += "Saldo: "  +  Depositar(deposito) + "\n \n";
    deposito = 0;
   }else{
    info += "Saldo: "  +  Sacar(saque) + "\n \n";
    saque = 0;
   }
   quadro.value += info;
}