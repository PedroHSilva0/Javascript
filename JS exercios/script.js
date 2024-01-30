const  dataAtual = new Date ()

let day = dataAtual.getDate()
let month = dataAtual.getMonth()+1
let year = dataAtual.getFullYear()
let horas = dataAtual.getHours()
let minutos = dataAtual.getMinutes()

let dataAtualformatada = day + "/" + month +"/" + year + " " + horas + ":" +minutos

console.log(dataAtualformatada)

document.getElementById("CurrDateTime").innerHTML = dataAtualformatada;

