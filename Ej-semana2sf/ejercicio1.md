# Ejercicio 1: Conversor de Temperatura Celsius a Fahrenheit

## Descripción
Este ejercicio implementa un conversor de temperatura simple que permite al usuario convertir grados Celsius a grados Fahrenheit. La aplicación utiliza HTML para la interfaz de usuario y JavaScript para la lógica de conversión.

## Archivos Relacionados
- [`index1.html`](index1.html): Archivo HTML que define la estructura de la página, incluyendo el formulario de entrada, botón de conversión y área de resultados.
- [`app1.js`](app1.js): Archivo JavaScript que contiene la lógica para seleccionar elementos del DOM, manejar eventos y realizar la conversión de temperatura.

## Funcionalidad
- **Entrada de Datos**: El usuario puede ingresar una temperatura en grados Celsius mediante un campo de entrada numérico.
- **Conversión**: Al hacer clic en el botón "Convertir a °F", se calcula la temperatura equivalente en Fahrenheit utilizando la fórmula:  
  `F = (C × 9/5) + 32`
- **Validación**: Se verifica que el valor ingresado sea un número válido. Si no, se muestra un mensaje de error.
- **Salida**: El resultado se muestra en la página, indicando la temperatura en °F.

## Estructura del Código
### HTML (`index1.html`)
- Define un contenedor centrado con estilos CSS para una apariencia limpia.
- Incluye un input para Celsius, un botón para convertir y un div para mostrar el resultado.
- Enlaza el archivo `app1.js` al final del body.

### JavaScript (`app1.js`)
- Selecciona los elementos del DOM: input, botón y div de resultado.
- Agrega un event listener al botón que:
  - Obtiene el valor del input.
  - Valida que sea un número.
  - Aplica la fórmula de conversión.
  - Actualiza el contenido del div de resultado.

## Instrucciones de Uso
1. Abre `index1.html` en un navegador web.
2. Ingresa una temperatura en grados Celsius en el campo proporcionado.
3. Haz clic en "Convertir a °F" para ver el resultado.

## Mejoras Sugeridas
- Agregar validación más robusta (e.g., rangos de temperatura).
- Permitir conversión inversa (Fahrenheit a Celsius).
- Mejorar la accesibilidad con etiquetas ARIA.
- Agregar animaciones o transiciones CSS para una mejor experiencia de usuario.