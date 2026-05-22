let colores = [
  [0, 80, 100],     // rojo
  [60, 80, 100],    // amarillo
  [180, 80, 100],   // celeste
  [300, 60, 100]    // rosado/morado
];

let indice = 0;

function setup() {
  createCanvas(600, 400);

  colorMode(HSB, 360, 100, 100);

  textSize(50);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  
  

  background(0);

  // color actual
  fill(
    colores[indice][0],
    colores[indice][1],
    colores[indice][2]
  );

  text("ATEEZ", mouseX, mouseY);
}

// cambia color al hacer click
function mousePressed() {

  indice = indice + 1;

  // volver al primer color
  if (indice >= colores.length) {
    indice = 0;
  }
  
  circle 
}

// enlace de p5.js https://editor.p5js.org/Fuyu_xoi/sketches/jYhc6iMMm
