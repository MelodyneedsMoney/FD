let imgc=[];
let numc=22;
function preload(){

  for (let i=0;i<numc;i++){
    imgc[i]=loadImage('animecode/can/can/can'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (let i=0;i<numc;i++){
  imgc[i].resize(550, 550);
  }
}
let ic=0;
function draw() {
  background(245);

 frameRate(10)

  image(imgc[ic],width/2+20,height/2-30)

  if(ic==numc-1){
    ic=0
  }else{ic++}
}