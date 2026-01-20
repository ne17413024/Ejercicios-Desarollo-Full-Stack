# Ejercicio 3: Cambiador de Color de Fondo

## Descripción
Este ejercicio crea una aplicación que permite alternar el color de fondo de la página entre un modo claro (blanco) y un modo oscuro (gris oscuro) mediante un botón. También actualiza un indicador de texto para mostrar el estado actual.

## Archivos Relacionados
- [`index3.html`](index3.html): Archivo HTML que estructura la página, incluyendo el botón de cambio y el texto de estado.
- [`app3.js`](app3.js): Archivo JavaScript que maneja la lógica para alternar el color y actualizar el estado.

## Funcionalidad
- **Alternancia de Color**: Un botón permite cambiar entre fondo blanco y oscuro.
- **Indicador de Estado**: Un texto muestra si el modo actual es "claro" u "oscuro".
- **Estado Inicial**: Comienza en modo claro.

## Estructura del Código
### HTML (`index3.html`)
- Página centrada con un contenedor que incluye título, descripción, botón y texto de estado.
- Estilos CSS para una apariencia atractiva.
- Enlaza `app3.js` para la funcionalidad.

### JavaScript (`app3.js`)
- Variable booleana `esOscuro` para rastrear el estado (inicialmente `false`).
- Selección de elementos: botón, texto de estado y body.
- Función `actualizarEstado()`: Actualiza el texto del span dentro del statusText.
- Función `aplicarColorDeFondo()`: Cambia el background del body según `esOscuro`.
- Event listener en el botón que invierte `esOscuro` y llama a las funciones de actualización.
- Llamadas iniciales para asegurar consistencia.

## Instrucciones de Uso
1. Abre `index3.html` en un navegador.
2. Haz clic en "Cambiar color" para alternar entre modos claro y oscuro.
3. Observa cómo cambia el fondo y el texto de estado.

## Mejoras Sugeridas
- Agregar más temas (e.g., colores personalizados).
- Usar transiciones CSS para suavizar el cambio de color.
- Guardar la preferencia en localStorage.
- Agregar un toggle switch en lugar de botón.