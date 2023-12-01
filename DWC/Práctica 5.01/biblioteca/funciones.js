const mostrarDatos = (data) => {
  let div = document.getElementsByClassName("container")[0];
  let ul = document.createElement("ul");
  div.appendChild(ul);
  
  for (let i = 0; i < data.results.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = data.results[i].name;
    ul.appendChild(li);
  }
};

const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mapDatos = (datos, donde) => {
  let cadena = "";
  datos.length
    ? datos.map((v, i, a) => {
        //console.log(v);
        cadena += `<p class="persona"> ${v.first_name} ${v.last_name} </p>`;
      })
    : (cadena = "No se han encontrado datos.");
  donde.innerHTML = cadena;
};

export { mostrarDatos, generarNumeroAleatorio, mapDatos };