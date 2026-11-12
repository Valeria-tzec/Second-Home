//Validación de correo institucional y cambio de usuario
const REGEX_CORREO = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;

function esCorreoInstitucional(correo) {
  if (!REGEX_CORREO.test(correo)) return false;
  const dominio = correo.split("@")[1].toLowerCase();
  return obtenerCatalogos().dominiosPermitidos.some(
    (d) => dominio === d || dominio.endsWith("." + d),
  );
}

// acciones de sesión

//si el correo existe, entra; si no, se crea el usuario

function iniciarSesionEstudiante(nombre, correo) {
  nombre = nombre.trim();
  correo = correo.trim().toLowerCase();

  if (nombre.length < 2)
    return { ok: false, error: "Escribe tu nombre completo." };
  if (!esCorreoInstitucional(correo)) {
    return {
      ok: false,
      error: "Usa tu correo institucional universitario (nombre@alum.us.es).",
    };
  }

  const usuarios = obtenerUsuarios();
  let usuario = usuarios.find((u) => u.correo === correo);

  if (usuario && usuario.rol === "administrador") {
    return {
      ok: false,
      error:
        "Esta cuenta es de administrador. Usa <<Ingresar como administrador>>.",
    };
  }

  if (!usuario) {
    usuario = {
      id: generarId("usr"),
      nombre,
      correo,
      password: "",
      universidad: "",
      periodoIntercambio: "",
      zonaPreferida: "",
      rol: "estudiante",
    };
    usuarios.push(usuario);
    if (!guardarUsuarios(usuarios))
      return { ok: false, error: "No se pudo guardar tu usuario." };
  }

  establecerUsuarioActivo(usuario.id);
  return { ok: true, usuario };
}

function iniciarSesionAdmin(correo, password) {
  correo = correo.trim().toLowerCase();
  const admin = obtenerUsuarios().find(
    (u) =>
      u.correo === correo &&
      u.rol === "administrador" &&
      u.password === password,
  );
  if (!admin)
    return {
      ok: false,
      error: "Correo o contraseña de administrador incorrectos.",
    };
  establecerUsuarioActivo(admin.id);
  return { ok: true, usuario: admin };
}

function cambiarUsuarioDemo(id) {
  if (!obtenerUsuarioPorId(id)) return false;
  return establecerUsuarioActivo(id);
}

function requerirSesion() {
  const usuario = obtenerUsuarioActivo();
  if (!usuario) {
    window.location.href = "login.html";
    return null;
  }
  return usuario;
}

function cerrarSesionYSalir() {
  cerrarSesion();
  window.location.href = "login.html";
}

const formEstudiante = document.getElementById("form-estudiante");

if (formEstudiante) {
  inicializarDatos();

  const formAdmin = document.getElementById("form-admin");
  const inputCorreo = document.getElementById("correo");
  const inpurNombre = document.getElementById("nombre");
  const checkRecordar = document.getElementById("recordar");

  const recordado = obtenerRecordado();
  if (recordado) {
    inputCorreo.value = recordado.correo;
    inputNombre.value = recordado.nombre;
    checkRecordar.checked = true;
  }

  formEstudiante.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const resultado = iniciarSesionEstudiante(
      inputNombre.value,
      inputCorreo.value,
    );
    if (!resultado.ok) return mostrarNotificacion(resultado.error, "error");

    if (checkRecordar.checked) {
      guardarRecordado({
        nombre: resultado.usuario.nombre,
        correo: resultado.usuario.correo,
      });
    } else {
      olvidarRecordado();
    }
    window.location.href = "index.html";
  });

  formAdmin.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const resultado = iniciarSesionAdmin(
      document.getElementById("correo-admin").value,
      document.getElementById("password-admin").value,
    );
    if (!resultado.ok) return mostrarNotificacion(resultado.error, "error");
    window.location.href = "index.html";
  });

  document.querySelectorAll("[data-alternar-login").forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      evento.preventDefault();
      formEstudiante.hidden = !formEstudiante.hidden;
      formAdmin.hidden = !formAdmin.hidden;
    });
  });

  document.querySelectorAll("[data-usuario]").forEach((boton) => {
    boton.addEventListener("click", () => {
      cambiarUsuarioDemo(boton.dataset.usuario);
      window.location.href = "index.html";
    });
  });
}
