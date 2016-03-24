var dataLength = data.length;
var dataArr = []; //empty array 
var dataArrLength; //creating this variable, equal to dataArr.length
var dataValueText = "Hover Over To See Values"

//Constructor called aData 
var aData = function(localHeight){
  this.height = localHeight; 
  this.width = 10;
  this.renderRect= function(x,y){
    fill("#bada55");
    rect(x,height,this.width,this.height * -5);
  }
  
  this.renderCircleTop = function(x) {
    var circleWidth = this.width * 2;
    fill("hotpink");
    ellipse((x*10)+(this.width / 2), this.dramaticHeight, circleWidth, circleWidth);
  }
  
  this.render = function(i) {
    this.renderRect(i);
    this.renderCircleTop(i);
  }
}


function setup() {
  for(var i = 0; i < dataLength; i++) {
    dataArr.push(new aData(data[i])); //applies aData to data; turns data values into heights 
  }
  
  createCanvas(500,500);
  dataArrLength= dataArr.length; //initialising it here so the code doesnt keep calculating the array
}

function draw() {
  background('#333');
  for(var i = 0; i < dataArrLength; i++){ //dataArrLength <<<
    dataArr[i].render(i);
  }
  
  fill("#fefefe");
  //textFont("NAME OF FONT") add url into html
  text("Intro Text", 20, 1000);
}