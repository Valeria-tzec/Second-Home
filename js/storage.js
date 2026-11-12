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

// Inicialización
// copia la semilla solo la primera vez
function inicializarDatos() {
  if (leer(CLAVES.iniciado, false)) return;
  guardar(CLAVES.catalogos, CATALOGOS_SEMILLA);
  guardar(CLAVES.catalogos, USUARIOS_SEMILLA);
  guardar(CLAVES.catalogos, PRODUCTOS_SEMILLA);
  guardar(CLAVES.catalogos, MENSAJES_SEMILLA);

  // no se guarda sesión aquí, nadie está logueado hasta que pase por login.html
  guardar(CLAVES.iniciado, true);
}

//esto solo borra lo de SecondHome, no localStorage.clear()
function reiniciarDatos() {
  Object.values(CLAVES).forEach((c) => localStorage.removeItem(c));
  inicializarDatos();
}

function obtenerCatalogos() {
  return leer(CLAVES.catalogos, CATALOGOS_SEMILLA);
}

//usuarios
function obtenerUsuarios() {
  return leer(CLAVES.usuarios, []);
}
function guardarUsuarios(lista) {
  return guardar(CLAVES.usuarios, lista);
}

//productos
function obtenerProductos() {
  return leer(CLAVES.productos, []);
}
function guardarProductos(lista) {
  return guardar(CLAVES.productos, lista);
}

//mensajes
function obtenerMensajes() {
  return leer(CLAVES.mensajes, []);
}
function guardarMensajes(lista) {
  return guardar(CLAVES.mensajes, lista);
}

function obtenerUsuarioPorId(id) {
  return obtenerUsuarios().find((usuario) => usuario.id === id);
}
function obtenerProductoPorId(id) {
  return obtenerProductos().find((producto) => producto.id === id);
}

function obtenerUsuarioActivo() {
  return obtenerUsuarioPorId(leer(CLAVES.sesion, null));
}
function establecerUsuarioActivo(id) {
  return guardar(CLAVES.sesion, id);
}
function cerrarSesion() {
  localStorage.removeItem(CLAVES.sesion);
}
