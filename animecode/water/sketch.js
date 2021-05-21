let imgw=[];
let numw=6;
function preload(){

  for (let i=0;i<numw;i++){
    imgw[i]=loadImage('animecode/water/water/w'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  for (let i=0;i<numw;i++){
  imgw[i].resize(500, 500);
  }
}
let iw=0;
function draw() {
  background(245);

 frameRate(5)

  image(imgw[iw],width/2,height/2)

  if(iw==numw-1){
    iw=0
  }else{iw++}
}