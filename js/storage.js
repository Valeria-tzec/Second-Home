//Funciones para leer y guardar en LocalStorage

const CLAVES = {
  catalogos: "sh_catalogos",
  usuaios: "sh_usuarios",
  productos: "sh_productos",
  mensajes: "sh_mensajes",
  sesion: "sh_sesion",
  recordar: "sh_recordar",
  iniciado: "sh_iniciado",
};

function leer(clave, valorPorDefecto) {
  try {
    const texto = localStorage.getItem(clave);
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
  return obtenerUsuarios().find((u) => u.id === id);
}
function obtenerProductoPorId(id) {
  return obtenerProductos().find((p) => p.id === id);
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

function agregarProducto(producto) {
  const lista = obtenerProductos();
  producto.id = generarId("prod");
  producto.fechaCreacion = new Date().toISOString().slice(0, 10);
  producto.estado = "Disponible";
  lista.push(producto);
  return guardarProductos(lista) ? producto : null;
}

function actualizarProducto(id, cambios) {
  const lista = obtenerProductos();
  const i = lista.findIndex((producto) => producto.id === id);
  if (i === -1) return false;
  lista[i] = { ...lista[i], ...cambios };
  return guardarProductos(lista);
}

function eliminarProducto(id) {
  return guardarProductos(
    obtenerProductos().filter((producto) => producto.id !== id),
  );
}

//estado de producto
function cambiarEstadoProducto(productoId, nuevoEstado, usuarioId) {
  const producto = obtenerProductoPorId(productoId);
  const usuario = obtenerUsuarioPorId(usuarioId);
  if (!esDueno && !esAdmin) return false;

  if (!obtenerCatalogos().estados.includes(nuevoEstado)) return false;

  return actualizarProducto(productoId, {
    estado: nuevoEstado,
  });
}

// Mensajes

function obtenerConversacion(productoId, compradorId) {
  return obtenerMensajes()
    .filter(
      (mensaje) =>
        mensaje.productoId === productoId &&
        mensaje.compradorId === compradorId,
    )
    .sort((a, b) => a.fechaHora.localeCompare(b.fechaHora));
}

function agregarMensaje(mensaje) {
  const lista = obtenerMensajes();
  mensaje.id = generarId("msg");
  mensaje.fechaHora = new Date().toISOString();
  lista.push(mensaje);
  return guardarMensajes(lista) ? mensaje : null;
}

// Imágenes
function rutaImagen(imagen) {
  return imagen ? imagen : "img/placeholder.svg";
}

//login
function obtenerRecordado() {
  return leer(CLAVES.recordar, null);
}
function guardarRecordado(datos) {
  return guardar(CLAVES.recordar, datos);
}
function olvidarRecordado() {
  localStorage.removeItem(CLAVES.recordar);
}
