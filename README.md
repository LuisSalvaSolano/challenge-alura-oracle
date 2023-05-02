# challenge-alura-oracle
Pagina de encriptado de mensajes con HTML, CSS y JAVASCRIPT
El código se encarga de cifrar y descifrar texto utilizando un mapa de sustitución de letras. Específicamente, el mapa de sustitución utilizado consiste en reemplazar las vocales (e, i, a, o, u) por palabras que contienen dicha letra (enter, imes, ai, ober, ufat).

El código se divide en tres secciones principales:

Obtener elementos del DOM y configurar eventos de clic. El código comienza obteniendo los elementos del DOM que se necesitan para su funcionamiento, como los botones de "encriptar", "desencriptar" y "copiar", y los contenedores de texto. A continuación, se configuran los eventos de clic para cada botón, de manera que cuando se haga clic en uno de ellos, se ejecute la función correspondiente.

Funciones para encriptar y desencriptar texto. Cuando se hace clic en los botones de "encriptar" o "desencriptar", se ejecutan las funciones correspondientes. Ambas funciones siguen un proceso similar: primero se obtiene el texto ingresado por el usuario a través de un campo de entrada, y se valida que el texto contenga únicamente letras y números. Si el texto es válido, se realiza la sustitución de letras utilizando el mapa de sustitución correspondiente (ya sea para encriptar o desencriptar), y se muestra el resultado en un contenedor de texto. Si el texto no es válido, se muestra una alerta al usuario.

Funciones auxiliares. El código también cuenta con dos funciones auxiliares que se encargan de mostrar y ocultar la alerta en caso de que el texto ingresado por el usuario no sea válido.

En resumen, el código proporcionado es una implementación simple de un cifrado de sustitución utilizando un mapa de reemplazo de letras predefinido. Si bien es una solución rudimentaria, podría ser útil para ciertos casos de uso simples en los que se requiere proteger información básica.
