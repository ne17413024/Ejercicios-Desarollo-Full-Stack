# Ejercicio 2: Contador de Clics

## Descripción
Este ejercicio implementa un contador simple que permite al usuario incrementar un número mediante un botón y reiniciarlo a cero con otro botón. La aplicación demuestra el manejo básico de eventos en JavaScript y la manipulación del DOM.

## Archivos Relacionados
- [`index2.html`](index2.html): Archivo HTML que define la interfaz de usuario, incluyendo el display del contador y los botones de interacción.
- [`app2.js`](app2.js): Archivo JavaScript que maneja la lógica del contador, incluyendo el incremento y el reinicio.

## Funcionalidad
- **Incremento**: Al hacer clic en "Sumar 1", el contador aumenta en 1 y se actualiza la pantalla.
- **Reinicio**: Al hacer clic en "Reiniciar", el contador vuelve a 0 y se refleja en la interfaz.
- **Display**: El número actual se muestra en un elemento grande y centrado.

## Estructura del Código
### HTML (`index2.html`)
- Contenedor centrado con estilos CSS para una apariencia moderna.
- Elemento `<div>` para mostrar el contador actual.
- Dos botones: uno para incrementar y otro para reiniciar.
- Enlaza `app2.js` al final del documento.

### JavaScript (`app2.js`)
- Declara una variable `count` inicializada en 0.
- Selecciona los elementos del DOM: display, botón de incremento y botón de reinicio.
- Define una función `actualizarDisplay()` que actualiza el texto del contador en el DOM.
- Agrega event listeners a los botones para manejar clics:
  - Incremento: aumenta `count` y llama a `actualizarDisplay()`.
  - Reinicio: pone `count` en 0 y llama a `actualizarDisplay()`.

## Instrucciones de Uso
1. Abre `index2.html` en un navegador.
2. Haz clic en "Sumar 1" para aumentar el contador.
3. Haz clic en "Reiniciar" para volver a 0.

## Mejoras Sugeridas
- Agregar un botón para decrementar.
- Implementar límites (máximo y mínimo).
- Agregar sonidos o animaciones al cambiar el contador.
- Guardar el estado en localStorage para persistencia entre sesiones.