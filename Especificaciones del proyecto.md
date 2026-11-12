# Elección del stack tecnológico 

## Recursos necesarios (herramientas, materiales, tecnología)
- Lenguajes base: HTML5, CSS3 con Flexbox y CSS Grid (diseño que no depende de frameworks pesados), JavaScript Vainilla ES6+.
- Persistencia de datos: LocalStorage con estructuras de datos en formato JSON (sin backend ni base de datos externa)
- Entorno de desarrollo: Visual Studio Code + extensión Live Server (recarga la página automáticamente cada vez que se guarden los cambios, agilizando las pruebas)
- Diseño UI/UX: Figma
- Control de versiones y despliegue: Git, GitHub (estas dos herramientas permiten trabajar de forma colaborativa manteniendo un código limpio) y GitHub Pages (servicio de alojamiento gratuito que permite subir la página web estática a internet)

<br>

# Definición de usuarios

| Rol | Características | Usuario prueba |
| :--- | :--- | :--- |
| **Estudiante vendedor** | • Crear anuncios.<br>• Subir fotos<br>• Asignar etiquetas ("Disponible hasta x fecha", "Pack de mudanza completo", "Donación/Regalo")<br>• Editar precios<br>• Responder chats | **Id:** usr_01<br>**Nombre:** Nicole Perez<br>**Correo:** nicole@alum.us.es<br>**Contraseña:** demo123<br>**Universidad:** Universidad de Sevilla<br>**Periodo de Intercambio:** 1 semestre<br>**Zona preferida:** Reina Mercedes<br>**Rol:** Estudiante |
| **Estudiante comprador** | • Explorar el catálogo<br>• Filtrar por zona y categoría<br>• Ver detalles de productos<br>• Iniciar una conversación en el chat interno con el vendedor | **Id:** usr_02<br>**Nombre:** Helena Gómez<br>**Correo:** helena@alu.upo.es<br>**Contraseña:** demo123<br>**Universidad:** Universidad Pablo de Olavide<br>**Periodo de intercambio:** 1 semestre<br>**Zona preferida:** Nervión<br>**Rol:** Estudiante |
| **Administrador** | • Visualizar todos los anuncios<br>• Eliminar manualmente publicaciones que incumplan las normas<br>• Supervisar la baja automática de anuncios caducados | **Id:** usr_admin<br>**Nombre:** Admin de Second Home<br>**Correo:** admin@secondhome.es<br>**Contraseña:** demo123<br>**Universidad:** Equipo Gestor de SecondHome<br>**Periodo de intercambio:** N/A<br>**Zona preferida:** Centro<br>**Rol:** Administrador |

<br>

# Definición de requerimientos y restricciones 

## Requerimientos funcionales

### RF01- Registro y acceso simulado
Validar con expresiones regulares que el correo ingresado pertenezca a un dominio universitario permitido (.edu, .es de universidades) y permitir cambiar de usuario activo con un selector de demostración.

### RF02- Gestión de anuncios
Crear, editar y eliminar publicaciones con título, precio, descripción, foto, categoría, zona de Sevilla, etiqueta de modalidad y fecha límite de disponibilidad.

### RF03- Filtrado doble
Filtrar en tiempo real los artículos por Categoría (muebles, electrónica, cocina, ropa de cama) y por Zona de Sevilla (Nervión, Reina Mercedes, Triana, Macarena, Cartuja, Centro, Los Remedios).

### RF04- Gestión de estados y caducidad
Marcar como “Disponible” o “Vendido” y ocultar/eliminar automáticamente anuncios cuya fecha límite haya pasado.

### RF05- Mensajería interna
Enviar y recibir mensajes asociados a un producto entre comprador y vendedor, guardados en LocalStorage.

### RF06- Panel de administración y moderación
Permitir que el usuario con rol de Administrador visualice una vista global de control para eliminar publicaciones que incumplan las normas o gestionar usuarios de prueba.

### RF07- Búsqueda por texto libre
Incorporar una barra de búsqueda en el catálogo que permita a los estudiantes encontrar productos introduciendo palabras clave coincidentes en el título o la descripción.

### RF08- Ordenamiento del catálogo
Permitir ordenar los resultados de los anuncios mostrados según criterios como: precio (de menor a mayor y viceversa) o fecha de publicación (más recientes primero).

### RF09- Gestión de perfil de usuario (“Mis Anuncios”)
Un apartado en la interfaz donde cada usuario pueda visualizar exclusivamente los anuncios que ha publicado, facilitando su edición rápida o el cambio de estado a “Vendido”.

### RF10- Retroalimentación visual (Notificaciones UI)
Mostrar mensajes emergentes o alertas visuales amigables cada vez que el usuario realice una acción exitosa (“Anuncio publicado con éxito”, “Perfil actualizado”, “Anuncio actualizado con éxito”, etc)

<br>

## Requerimientos no funcionales

### RNF01- Diseño responsivo adaptable 
La interfaz de usuario debe adaptarse de manera fluida y correcta a diferentes resoluciones de pantalla y dispositivos, garantizando una experiencia de navegación óptima, accesibilidad visual y elementos táctiles o de clic funcionales sin pérdida de información 

### RNF02- Optimización y compresión de imágenes
El sistema debe procesar y comprimir automáticamente las fotografías subidas por los usuarios a un tamaño menor de 50KB mediante el uso de elementos canvas en JavaScript antes de guardarlas, asegurando que se optimice el espacio disponible para no saturar el límite estricto de 5MB que impone la API de LocalStorage. 

### RNF03- Usabilidad y accesibilidad visual
La interfaz debe contar con una paleta de colores coherente, contrastes adecuados y un diseño intuitivo.

<br>

## Restricciones (limitaciones)

- Sin pasarelas de pago en línea.
- Sin gestión de envíos a domicilio.
- Sin almacenamiento de contraseñas reales y persistencia exclusivamente local al navegador donde se ejecuta.
- Si el usuario limpia el historial de navegación o borra la caché/datos de sitio, se restablecerá la información del LocalStorage (a menos que se reinicien los datos semilla)
- La aplicación está sujeta rígidamente al tope de 5MB de capacidad máxima de almacenamiento local que impone la API de los navegadores web. 

<br>

# Diseño de estructura de datos (JSON/LocalStorage)

<br>

``` json
{
  "sh_catalogos": {
    "zonasSevilla": ["Nervión", "Reina Mercedes", "Triana", "Macarena", "Centro", "Los Remedios", "Cartuja"],
    "categorias": ["Muebles", "Electrónica", "Cocina", "Ropa de cama"],
    "dominiosPermitidos": ["alum.us.es", "us.es", "alu.upo.es", "upo.es"]
  },
  "sh_usuarios": [
    {
      "id": "usr_01",
      "nombre": "Nicole Perez",
      "correo": "nicole@alum.us.es",
      "password": "demo123",
      "universidad": "Universidad de Sevilla",
      "periodoIntercambio": "1 semestre",
      "zonaPreferida": "Reina Mercedes",
      "rol": "estudiante"
    },
    {
      "id": "usr_02",
      "nombre": "Helena Gómez",
      "correo": "helena@alu.upo.es",
      "password": "demo123",
      "universidad": "Universidad Pablo de Olavide",
      "periodoIntercambio": "1 semestre",
      "zonaPreferida": "Nervión",
      "rol": "estudiante"
    },
    {
      "id": "usr_admin",
      "nombre": "Admin de Second Home",
      "correo": "admin@secondhome.es",
      "password": "demo123",
      "universidad": "Equipo Gestor de SecondHome",
      "periodoIntercambio": "N/A",
      "zonaPreferida": "Centro",
      "rol": "administrador"
    }
  ],
  "sh_productos": [
    {
      "id": "prod_101",
      "vendedorId": "usr_01",
      "título": "Escritorio y silla ergonómica",
      "descripcion": "En perfecto estado, los usé solo un cuatrimestre.",
      "precio": 25.00,
      "categoria": "Muebles",
      "zona": "Reina Mercedes",
      "etiquetaModalidad": "Pack de mudanza completo",
      "disponibleHasta": "2026-12-20",
      "estado": "Disponible",
      "imagen": "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
      "fechaCreacion": "2026-10-07"
    }
  ],
  "sh_mensajes": [
    {
      "id": "msg_501",
      "productoId": "prod_101",
      "compradorId": "usr_02",
      "vendedorId": "usr_01",
      "emisorId": "usr_02",
      "texto": "¡Hola! ¿Sigue disponible para recoger mañana en Reina Mercedes?",
      "fechaHora": "2026-10-08T16:30:00"
    }
  ]
}
