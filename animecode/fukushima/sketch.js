let imgf=[];
let numf=27;
function preload(){

  for (let i=0;i<numf;i++){
    imgf[i]=loadImage('animecode/fukushima/fu/f'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (let i=0;i<numf;i++){
  imgf[i].resize(500, 500);
  }
}
let i=0;
function draw() {
  background(245);

 frameRate(8)

  image(imgf[i],width/2-20,height/2)

  if(i==numf-1){
    i=0
  }else{i++}
}