//funcion que busca o creo el contenedor donde se apilan los avisos

function mostrarNotificacion(mensaje, tipo = "exito") {
  let contenedor = document.getElementById("notificaciones");
  if (!contenedor) {
    contenedor = document.createElement("div");
    contenedor.id = "notificaciones";
    contenedor.setAttribute("aria-live", "polite");
    document.body.appendChild(contenedor);
  }

  const aviso = document.createElement("div");
  aviso.className = "notificacion " + tipo;
  aviso.textContent = mensaje;
  contenedor.appendChild(aviso);

  setTimeout(() => aviso.remove(), 3000);
}
