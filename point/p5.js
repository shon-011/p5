   //ディスプレイ全画面表示
   const  winX = window.innerWidth
   const  winY = window.innerHeight
   
   
   
   //-----------------------------------
   
   
   // 背景色
   let bgc = 255;
   // 玉のRGBA
   let r = 255;
   let g = 255;
   let b = 255;
   let a = 60;
   
   // 玉のサイズ(Max)
   let pointSize = 200
   
   
   // ------------------------------------
   
   
   // 1st call
   function setup() {
       createCanvas(winX, winY);
       background(bgc);
   }
   //60/1 call
   function draw() {
   console.log(r,g);
       
       fill(r,g,random(b),a);
       
       noStroke();
       ellipse(random(width),random(height),random(pointSize));
   
       if(mouseIsPressed) {
           let x = mouseX / 5;
           let y = mouseY / 5;
           r = x;
           g = y;
       }
   }
   