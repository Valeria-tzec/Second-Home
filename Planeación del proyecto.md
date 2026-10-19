# Propuesta de proyecto: Plataforma Web de Segunda Mano para Estudiantes de Intercambio


## Título del proyecto

SecondHome
<br><br>



## Objetivo general y objetivos específicos


### Objetivo general:

Desarrollar una aplicación web orientada a los estudiantes de intercambio de Sevilla para facilitar la compra y venta local de artículos para amueblar, electrodomésticos y utensilios de forma rápida y segura. 
<br>
    
### Objetivos específicos:

- Diseñar un catálogo interactivo con un sistema de filtrado doble por zonas geográficas de Sevilla y por categorías de artículos para facilitar la búsqueda y compra-venta entre estudiantes. 
- Implementar etiquetas en los productos (“Disponible hasta x fecha”, “Pack de mudanza completo”, “Donación/Regalo” o “Disponible o Vendido”).
- Integrar un sistema de mensajería directa entre comprador y vendedor dentro de la plataforma.

<br>



## Justificación


Al llegar, se notó que un problema en común entre estudiantes de intercambio es la compra de electrodomésticos, utensilios y artículos para amueblar el piso o la habitación en la que se quedarán durante uno o dos cuatrimestres.
Al momento de irse sucede algo similar, ya que con las prisas no saben dónde ni con quién dejar las compras que hicieron, por lo que a veces sucede que, a pesar de que estén en buen estado, terminan tirándolas. Por esta razón, se consideró que una aplicación web en la que los estudiantes puedan comprar y vender este tipo de artículos sería ideal, ya que permitiría evitar el desperdicio de cosas útiles y apoyar en la economía del estudiante. 

<br>



## Alcances y limitaciones


**Alcances:**
- Registro e inicio de sesión de usuarios validando mediante correo institucional universitario (a través de un catálogo predefinido de dominios universitarios en formato JSON).
- Publicación y edición de anuncios con fotos, sistema de filtros por categorías (muebles, electrónica, ropa de cama, cocina) y por zona geográfica de Sevilla (Nervión, Triana, Reina Mercedes, Macarena, Centro, etc) y marcado de artículos como “vendidos”.
- Chat interno entre comprador y vendedor.
- Simulación multiusuario local: Se incluirá un conjunto de datos iniciales precargados (seed data) y un selector rápido de cambio sesión/perfil para demostrar la interacción entre distintos usuarios (vendedor, comprador y administrador) desde un mismo navegador. 

<br>

**Limitaciones:**
- La persistencia de datos (anuncios, usuarios y mensajes) es local al navegador de cada dispositivo; no existe sincronización en tiempo real entre distintas computadoras ni almacenamiento seguro de contraseñas en un servidor externo. 
- No se gestionan envíos a domicilio ni pasarelas de pago online complejas: la entrega y método de pago se acordarán directamente entre los usuarios. 

<br>



## Cronograma de trabajo

<br>

| Actividades | Responsable | Fecha de entrega | Octubre (Sem 1-4) | Noviembre (Sem 5-8) | Diciembre (Sem 9-10) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Elección del stack tecnológico | Valeria | 01/10/2026 | 🟩 Semana 1  | | |
| Definición de usuarios | Daniela | 01/10/2026 | 🟦 Semana 1 | | |
| Definición de requerimientos y restricciones | Valeria | 02/10/2026 | 🟩 Semana 1  | | |
| Diseño de estructura de datos (JSON / LocalStorage) | Daniela | 07/10/2026 | 🟦 Semana 1 | | |
| Diseño de interfaz (UI/UX) | Valeria | 12/10/2026 | 🟩 Semana 2 | | |
| Configuración del entorno y repositorio | Daniela | 13/10/2026 | 🟦 Semana 2 | | |
| Sistema de registro y login | Valeria | 15/10/2026 | 🟩 Semana 2 | | |
| Implementación de LocalStorage y datos semilla | Daniela | 17/10/2026 | 🟦 Semana 3 | | |
| Gestión de imágenes | Valeria | 20/10/2026 | 🟩 Semana 3 | | |
| Primera entrega de interfaz | Daniela | 29/10/2026 | 🟦 Semana 4 | | |
| Catálogo y filtros (zonas y categorías) | Valeria | 02/11/2026 | | 🟩 Semana 5 | |
| Formulario de publicación | Daniela | 06/11/2026 | | 🟦 Semana 5 | |
| Integración de interfaz (DOM) con LocalStorage | Valeria | 10/11/2026 | | 🟩 Semana 6 | |
| Sistema de contacto/mensajería | Daniela | 11/11/2026 | | 🟦 Semana 6 | |
| Autoeliminación de anuncios caducados | Valeria | 16/11/2026 | | 🟩 Semana 7 | |
| Estados de producto | Daniela | 24/11/2026 | | 🟦 Semana 8 | |
| Entrega final de interfaz | Valeria | 02/12/2026 | | | 🟩 Semana 9 |
| Pruebas de usuario | Daniela | 03/12/2026 | | | 🟦 Semana 9 |
| Corrección de errores | Valeria | 06/12/2026 | | | 🟩 Semana 9 |
| Despliegue | Daniela | 08/12/2026 | | | 🟦 Semana 10 |
| Documentación final | Valeria | 10/12/2026 | | | 🟩 Semana 10 |

<br>



## Desarrollo

Para el desarrollo de la aplicación web “SecondHome”, pensada para facilitar la compra y venta de artículos utilizados como electrodomésticos o para amueblar los pisos de estudiantes de intercambio en Sevilla, se trabajará a lo largo de los siguientes meses mediante un enfoque adaptado a entregas quincenales. Para lograrlo se usará exclusivamente HTML, CSS y JavaScript y almacenamiento en el navegador mediante LocalStorage.


Se dividió el proyecto en dos fases:

<br>

**Primera fase:**

- Definir claramente quiénes utilizarán la plataforma: el estudiante vendedor (quien publica los muebles o electrodomésticos al terminar su estancia), el estudiante comprador (el recién llegado que busca equipar su habitación de forma económica) y el administrador (encargado de supervisar la comunidad).
- Requerimientos funcionales: el registro exclusivo mediante correo institucional, la subida de anuncios con sus detalles, el sistema de filtros por zonas geográficas de Sevilla y categorías de productos, y la mensajería directa entre usuarios. 
- Restricciones: no se podrá pagar en línea ni envíos a domicilio. Todas las transacciones económicas y las entregas físicas se acordarán de forma directa y presencial entre los usuarios. Además, al operar con LocalStorage, la demostración del flujo multiusuario se realizará en un mismo navegador mediante perfiles precargados.
- Creación de prototipos de logo, eslogan y mockups de las pantallas principales en Figma.
- Inicio de la estructura de datos en formato JSON, definiendo qué datos guardará cada usuario, qué campos tendrá cada producto y el listado de categorías y zonas de Sevilla. 

<br>

**Segunda fase:**

- Se empezará con la estructura de HTML y el diseño en CSS para que tenga una interfaz limpia, sencilla de usar y que sea adaptable al dispositivo.
- Realización de un script para validar los formularios de registro y un listado de dominios universitarios permitidos, simulando el inicio de sesión sin almacenar contraseñas reales sensibles. 
- Se crearán estructuras de objetos en JavaScript para la lógica del sitio para actualizar el estado de los artículos (“Disponible hasta x fecha”, “Pack de mudanza completo”, “Donación/regalo” o “Disponible o vendido”) y programar los filtros para que los usuarios puedan ordenar y buscar los productos tanto por categorías como por zonas específicas de Sevilla. 
- Usar LocalStorage para guardar de manera segura y local los perfiles de prueba, las publicaciones de los artículos y el historial del chat, haciendo que la información no se borre aunque se recargue la página e incluyendo datos semilla para probar la interacción entre distintos usuarios. 
- Se realizarán revisiones constantes y pruebas prácticas en diferentes navegadores para comprobar que los botones funcionen, que los filtros de zonas y categorías respondan correctamente y que el almacenamiento local guarde y cargue la información sin errores antes de cada entrega quincenal. 

<br>



### • Recursos necesarios (herramientas, materiales, tecnología)

<br>

- **Frontend:** HTML, CSS, JavaScript

- **Almacenamiento y persistencia de datos:** LocalStorage con estructuras de datos en formato JSON (sin backend ni base de datos externa)

- **Editor de código:** Visual Studio Code (con la extensión Live Server para pruebas locales)

- **Diseño UI/UX y prototipado:** Figma (diseño de mockups y prototipos de pantallas)

- **Control de versiones:** Git y Github

- **Despliegue:** Github Pages

<br>



### • Entregables esperados por etapa

<br>

**Etapa 1. Inicios de octubre (Semanas 1 y 2): Elección del stack tecnológico, definición de usuarios, requerimientos y restricciones, diseño de base de datos y diseño de interfaz (UI/UX)** 

Se entregará lo siguiente:

- Un documento donde se definirá que usaremos HTML, CSS, JavaScript y LocalStorage.
- La lista con los tipos de usuario (estudiante vendedor, comprador y administrador).
- Los requerimientos funcionales claros y las restricciones (nada de pagos en línea, sin envíos a domicilio).
- Los esquemas de la estructura de datos (qué guarda cada usuario, los campos de los productos y las zonas de Sevilla).
- Los prototipos visuales en Figma, el logo, el eslogan y los bocetos de las pantallas principales.

<br>

**Etapa 2. Mediados de octubre (Semanas 3 y 4): Configuración del entorno, sistema de registro y login, implementación de LocalStorage y gestión de imágenes.**

Se entregará lo siguiente:
- La carpeta del proyecto y el repositorio en GitHub listos con la estructura base de los archivos.
- El script de JavaScript funcionando para que el registro y el inicio de sesión validen correos institucionales de universidades y permitan cambiar entre perfiles de usuario de prueba.  
- El código del LocalStorage integrado con datos iniciales (seed data) para guardar y mostrar los datos de los usuarios sin que se borren al recargar la página.   
- La primera parte lógica para poder cargar, comprimir o referenciar imágenes en las publicaciones sin exceder el límite de memoria del navegador. 

<br>

**Etapa 3. Finales de octubre e inicios de noviembre (Semanas 4 a 6): Primera entrega de interfaz, catálogo y filtros, formulario de publicación, integración DOM-LocalStorage y sistema de contacto/mensajería.** 

Se entregará lo siguiente:
- La primera entrega de interfaz con la maquetación en HTML y el diseño en CSS listo y adaptado para el dispositivo.
- El formulario para publicar artículos y el catálogo con filtros por categorías y zonas de Sevilla.
- Las estructuras de objetos en JavaScript que conectan la interfaz con el almacenamiento local.
- El sistema de mensajería directa simulada para que los estudiantes se comuniquen guardando los mensajes localmente y pudiendo verificar la conversación al cambiar de usuario activo en el navegador. 

<br>

**Etapa 4. Noviembre a diciembre (Semanas 7 a 9): Autoeliminación de anuncios caducados, estados de producto, entrega final de interfaz, pruebas de usuario y corrección de errores.** 

Se entregará lo siguiente:

- La lógica para actualizar los estados de las publicaciones (“Disponible hasta x fecha”, “Pack de mudanza completo”, “Donación/regalo” o “vendido”).   
- El sistema para manejar la caducidad de los anuncios al superar la fecha límite establecida.   
- La entrega final de interfaz con todos los detalles visuales limpios y ordenados.   
- Las pruebas prácticas hechas en diferentes navegadores para asegurarnos de que todo funcione bien y corregir cualquier error.

<br>

**Etapa 5. Diciembre (Semana 10): Despliegue y documentación final.**

Se entregará lo siguiente:

- La página web desplegada en GitHub Pages y funcionando para poder abrirla con un enlace público.
- La documentación final con todo el reporte del proyecto y nuestra presentación lista para la defensa final.

<br>



### • Riesgos previstos y plan de mitigación

<br>

**1. Riesgo de uso y adopción (Alta rotación de usuarios y anuncios inactivos):**
- Descripción: El abandono de la plataforma al finalizar cada periodo de intercambio podría generar la acumulación de anuncios obsoletos. 

- Plan de mitigación: Se implementará primero un proceso de registro ágil de un solo paso (únicamente ingresando nombre y correo institucional válido, sin trámites ni verificaciones externas tardadas) para que publicar o contactar tome pocos clics. 
En segundo lugar, un sistema de caducidad automática dará de baja las publicaciones cuando pase la fecha límite asignada por el vendedor o termine el cuatrimestre, manteniendo el catálogo limpio sin intervención manual.

<br>

**2. Riesgo técnico (Límite de almacenamiento en LocalStorage por el uso de imágenes):**
- Descripción: LocalStorage tiene un límite aproximado de 5MB por dominio; guardar fotografías de alta resolución convertidas a formato Base64 puede saturar rápidamente la memoria y bloquear el guardado de nuevos anuncios. 

- Plan de mitigación: Se restringirá el peso de las imágenes subidas redimensionándolas mediante un elemento canvas en JavaScript antes de guardarlas en Base64, además de permitir el uso de enlaces URLs de imágenes externas o imágenes de catálogo predefinidas.

<br>

**3. Riesgo técnico (Limitación multiusuario y de seguridad de LocalStorage):**

- Descripción: Al no contar con un servicio backend, los datos solo existen en el navegador local del usuario y no es seguro almacenar contraseñas reales. 

- Plan de mitigación: Se precargará un archivo JSON con datos semilla (seed data de anuncios, vendedores y compradores) al iniciar la aplicación por primera vez y se incluirá un botón de perfil con un menú desplegable para cambiar de perfil de prueba en la interfaz para demostrar el flujo completo de compra-venta y chat en un mismo navegador, omitiendo el uso de contraseñas reales.
