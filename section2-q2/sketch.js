// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
 
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        fill(255)
      }
      else{
        fill(150)
      }
      rect(size * i,size * j,size,size);

      if((i+j)%2==1&&j<3){
        fill (255,0,0)
      }
      else if((i+j)%2==1&&j>4){
        fill(0)
      }
      else{
        
      }
      ellipse((size/2+size*i),(size*j+size/2),size);
      
      if((i+j)%2==0){
        fill(255)
        rect(size * i,size * j,size,size);
      }
      else if((i+j)%2==1&&(j<3&&j>4)){
        fill(255)
        rect(size * i,size * j,size,size);
      }
      else if((i+j)%2==1&&(j>2&&j<5)){
      fill(150)
      rect(size * i,size * j,size,size);
      }
     }
      
      
      

    }


  }


