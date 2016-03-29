var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Hover over match stick head to see values";


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * -5

  var circleWidth = this.width * 2

  this.renderRect = function(x) {
    fill("#bada55");
    rect(x,height,this.width,this.dramaticHeight);
  };

  this.renderCircleTop = function(x) {
    fill("hotpink");
    ellipse((x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth);
  };

  this.isMouseOnCircle = function(x) {
    if (collideRectCircle((x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth,mouseX, mouseY, 0)) {
      dataValueText = this.height
    }
  }
  
  this.isMouseOnRect = function(x) {
    if(collideRectRect((x) + (this.width / 2), height + this.dramaticHeight, width, width, mouseX, mouseY, 0)) { 
      dataValueText = this.height
    }
  }

  this.render = function(iterator) {
    var x = iterator * 10;
    this.renderRect(x);
    this.renderCircleTop(x);
    this.isMouseOnCircle(x);
    this.isMouseOnRect(x);
  }
}

function setup() {
  for (var i = 0; i < dataLength; i++) {
    dataArr.push(new Adata(data[i]));
  }
  createCanvas(500,500);
  dataArrLength = dataArr.length;
}

function draw() {
  background('#333');
  for (var i = 0; i < dataArrLength; i++){
    dataArr[i].render(i);
  }

  fill("#fefefe")
  textSize(22)
  // textFont("Bangers")
  text(dataValueText, 20, 100);
}