let imge=[];
let nume=13;
function preload(){
  //imge[0]=loadImage('eye/e'+'1'+'.png')
  for (let i=0;i<nume;i++){
    imge[i]=loadImage('eye/e'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (let i=0;i<nume;i++){
  imge[i].resize(500, 500);
  }
}
let ie=0;
function draw() {
  background(245);
frameRate(10)

  image(imge[ie],width/2,height/2)

  if(ie==12){
    ie=0
  }else{ie++}
}