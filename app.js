const imputAmigo = document.getElementById("amigo");//Capturar el valor del campo de entrada
const listaAmigos =[];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
    if(imputAmigo.value == ""){
        alert("Por favor, inserte un nombre.");//Validar la entrada
        return;
    }
    listaAmigos.push(imputAmigo.value);//Actualizar el array de amigos

    ulListaAmigos.innerHTML +=`<li>${imputAmigo.value}</li>` ;
    limpiarCaja();

}

function limpiarCaja (){  //Limpiar el campo de entrada
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value ="";
}

function sortearAmigo(){
    if(listaAmigos.length===0){//Validar que haya amigos disponibles
        alert("Agrega amigos en la lista para sortear")
    }
    const random =Math.floor(Math.random() *listaAmigos.length);//Generar un índice aleatorio
    const amigoSecreto = listaAmigos[random];//Obtener el nombre sorteado
    ulResultado.innerHTML =`<li>El amigo secreto es: ${amigoSecreto}</li>`;//Mostrar el resultado
  
};
