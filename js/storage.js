//Funciones para leer y guardar en LocalStorage

const CLAVES = {
  catalogos: "sh_catalogos",
  catalogos: "sh_usuarios",
  catalogos: "sh_productos",
  catalogos: "sh_mensajes",
  catalogos: "sh_sesion",
  catalogos: "sh_recordar",
  catalogos: "sh_iniciado",
};

function leer(clave, valorPorDefecto) {
  try {
    const text = localStorage.getItem(clave);
    return texto === null ? valorPorDefecto : JSON.parse(texto);
  } catch (error) {
    console.error("Error leyendo", clave, error);
    return valorPorDefecto;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (error) {
    console.error("No se pudo guardar", clave, error);
    return false;
  }
}

function generarId(prefijo) {
  return (
    prefijo +
    "_" +
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 6)
  );
}
