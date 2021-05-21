let imgm=[];
let numm=32;
function preload(){

  for (let i=0;i<numm;i++){
    imgm[i]=loadImage('animecode/mouth/mouth/m'+(i+1)+'.png')
  }

}
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (let i=0;i<numm;i++){
  imgm[i].resize(500, 500);
  }
}
let im=0;
function draw() {
  background(245);

 frameRate(20)

  image(imgm[im],width/2,height/2)

  if(im==numm-1){
    im=0
  }else{im++}
}