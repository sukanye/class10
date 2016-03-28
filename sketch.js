var hit=false;
var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Hover over match stick head to see values";

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


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * -5;

  var circleWidth = this.width * 2;

  this.renderRect = function(x) {
    fill("#bada55");
    rect(x,height,this.width,this.dramaticHeight);
  };

  this.renderCircleTop = function(x) {
    fill("hotpink");
    ellipse((x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth);
  };

  this.isMouseCloseToCircle = function(posnX, posnY, x) {
    if (dist(posnX, posnY, x, height + this.dramaticHeight) < circleWidth) {
      dataValueText = this.height;
    }
  }

  this.render = function(iterator) {
    var x = iterator * 10;
    this.renderRect(x);
    this.renderCircleTop(x);
    this.isMouseCloseToCircle(mouseX, mouseY, x);
  }
}

