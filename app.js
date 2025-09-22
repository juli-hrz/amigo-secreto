let listaAmigosSorteados = [];

function agregarAmigo () {
  var nombreAgregado = document.getElementById ("amigo").value
  if (nombreAgregado === ""){
    alert ("Por favor, inserte un nombre")
  } else {
    listaAmigosSorteados.push (nombreAgregado)
  }
  limpiarCaja()
  mostrarLista();

  console.log (listaAmigosSorteados);
}

function limpiarCaja () {
  document.getElementById ("amigo").value = "";
}

function mostrarLista (){
  let lista= document.getElementById("listaAmigos")
  lista.innerHTML= ""

  for (let i=0; i<listaAmigosSorteados.length; i ++){
    lista.innerHTML+= "<li>" + listaAmigosSorteados[i]+ "</li>"
  }
}

function sortearAmigo (){
  if (listaAmigosSorteados.length == 0){
    alert ("Por favor inserte un nombre")
  } else {
    const indiceRandom = Math.floor(Math.random()*(listaAmigosSorteados.length));
    let amigoSorteado = document.getElementById("resultado")
    amigoSorteado.innerHTML= `<li>El amigo secreto sorteado es: ${listaAmigosSorteados[indiceRandom]}</li>`
    }
}
