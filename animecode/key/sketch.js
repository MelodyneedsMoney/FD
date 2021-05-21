let imgk=[];
let numk=6;
function preload(){

  for (let i=0;i<numk;i++){
    imgk[i]=loadImage('animecode/key/key/k'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (let i=0;i<numk;i++){
  imgk[i].resize(500, 500);
  }
}
let ik=0;
function draw() {
  background(245);

 frameRate(5)

  image(imgk[ik],width/2,height/2)

  if(ik==numk-1){
    ik=0
  }else{ik++}
}