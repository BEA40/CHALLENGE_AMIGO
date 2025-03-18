let listaNombres = [];

function verificarNombre() {
    let nombrePersona = document.getElementById('amigo').value;

    if (nombrePersona !== "") {
        listaNombres.push(nombrePersona);
        actualizarLista();
        document.getElementById('amigo').value = "";
    } else {
        alert('No puede quedar en blanco el espacio');
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaNombres.forEach(nombre => {
        let li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (listaNombres.length < 1) {
      alert('No hay nombres para sortear');
      return;
  }

  document.getElementById('listaAmigos').style.display = "none"; // Oculta la lista cuando ya se sortea

  let resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = "";

  // Seleccionar un nombre aleatorio
  let indiceAleatorio = Math.floor(Math.random() * listaNombres.length); // Aleatorio
  let nombreSorteado = listaNombres[indiceAleatorio];

  // Mostrar el nombre sorteado
  let li = document.createElement('li');
  li.textContent = nombreSorteado;
  resultadoLista.appendChild(li);
}

