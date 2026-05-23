function setup() {
  createCanvas(400, 600);
  colorMode(HSB);
  noLoop();
  

}

function draw() {
  
  function mousePressed(){

    saveCanvas('solemne1-apellido-nombre', 'png');
}
  
  background(46, 20, 75);
  
  //  ✦. ──────୨ৎ────── .✦
  
  //rectangulo negro :D
  fill (0, 10, 5)
  rect (10, 10, 380, 580)
  
  //vertex :P
  push ();
  fill (46, 20, 75)
  beginShape();
  vertex(230, 40); // arriba izquierda
  vertex(360, 100); // arriba derecha
  vertex(250, 340); // abajo derecha 
  vertex(110, 280); // abajo izquierda 
  endShape(CLOSE);
  pop ();
  
  //linea atras del rectangulo rojo :0
  push ();
  stroke (46, 20, 75)
  strokeWeight (3)
  line (340, 600, 90, 0)
  pop ();
  
  //rectangulo rojo ≽(•⩊ •マ≼ 
  push ();
  angleMode (DEGREES)
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate (0)
  fill (0, 100, 60)
  strokeWeight (2)
  rect (20, -20, 190, 330)
  pop();
  
  //circulo negro ₍^. .^₎Ⳋ
  push ();
  angleMode (DEGREES)
  rectMode(CENTER);
  translate(width/2, height/2);
  fill (0, 10, 5)
  circle (20, -20, 180)
  pop ();
  
  //arco ₍ᐢ. .ᐢ₎
  push ();
  angleMode(DEGREES);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate (310)
  fill(46, 20, 75)
  arc(28, 5, 178, 185, 185, PI + HALF_PI)
  pop ();
  
  //linea cruzando circulo y arco 𐔌՞꜆.  ̫.꜀՞𐦯
  push ();
  stroke (46, 20, 75)
  strokeWeight (3)      
  line (0, 510, 400, 100);
  pop ();
  
  //linea cruzando el rectangulo rojo (˶°ㅁ°)!!
  push ();
  stroke (46, 20, 75)
  strokeWeight (3)
  line (0, 430, 220, 10);
  pop ();
  
  //lineas tipo rejilla (˶˃ ᵕ ˂˶)
  push ();
  stroke (46, 20, 75)
  strokeWeight (5)
  line (50, 520, 280, 520)
  line (50, 530, 280, 530)
  line (50, 540, 280, 540)
  line (50, 550, 280, 550)
  line (50, 560, 280, 560)
  pop ();
  
  //cuadraditos (˶˃𐃷˂˶)
  fill (0, 100, 60)
  square (width*3/4, height-height/8, width*0.08)
  square (width*1/9, height-height/1.05, width*0.05)
  
  //"Organizar es un acto creativo" — Piet Mondrian, Manifiesto De Stijl. ૮₍ ´ ꒳ `₎ა
  push ();
  fill (0, 100, 60)
  translate (60, 290)
  textSize (18)
  rotate (270)
  textFont ('blackletter');
  text("Organizar es un acto creativo.", 0, 0);
  pop ();
  
saveCanvas('solemne1-Valencia-Florencia', 'png')
  
  // ⏔⏔⏔ ꒰ ᧔ෆ᧓ ꒱ ⏔⏔⏔
}


//link p5.js https://editor.p5js.org/Fuyu_xoi/sketches/Z2qASvZmu
