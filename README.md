# aplicaciones-moviles

## Ejemplo de CSS Grid Layout
Este es un ejemplo básico de cómo usar CSS Grid Layout para crear una estructura de página sencilla. Grid es una herramienta poderosa para diseñar layouts en la web, y aquí te explico por qué es tan útil.

# Ejemplo

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo de Grid Layout</title>
  <style>
    .contenedor {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* Tres columnas de igual tamaño */
      grid-gap: 10px; /* Espacio entre elementos */
    }
    .item {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="contenedor">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>

## ¿Qué hace este código?

Contenedor Grid: El div con la clase .contenedor es el contenedor grid. Con display: grid, le decimos al navegador que use Grid Layout.

Columnas: Con grid-template-columns: 1fr 1fr 1fr, creamos tres columnas de igual tamaño. 1fr significa "una fracción del espacio disponible".

Espacio entre elementos: grid-gap: 10px añade un espacio de 10 píxeles entre los elementos.

Elementos: Cada div con la clase .item es un elemento dentro del grid. Se colocan automáticamente en las celdas de la cuadrícula.

# Ventajas de usar CSS Grid
Facilita el diseño: Con Grid, puedes crear layouts complejos de manera sencilla. No necesitas trucos como float o position.

Responsivo sin esfuerzo: Puedes ajustar el número de columnas o filas según el tamaño de la pantalla usando media queries.

Control total: Puedes colocar los elementos exactamente donde quieras, incluso superponerlos si es necesario.

Menos código: Comparado con métodos antiguos, Grid reduce la cantidad de código CSS que necesitas escribir.

