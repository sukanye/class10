var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var dataValueText = "Hover over match stick head to see values";
var hit = false;


var Adata = function(localHeight) {
  this.height = localHeight;
  this.width = 10;
  this.dramaticHeight = this.height * 5

  var circleWidth = this.width * 2;

this.isMouseOnRect = function(x) {
    hit= collidePointRect(mouseX, mouseY, x,height-this.dramaticHeight,this.width, this.dramaticHeight)
      if(hit) {
        dataValueText= this.height;
        fill('red');
      } else {
        fill('#bada55');
      }
    rect(x,height,this.width,this.dramaticHeight);
  };

  this.isMouseOnCircle = function(x) {
    hit= collidePointCircle(mouseX, mouseY,(x) + (this.width / 2), height + this.dramaticHeight, circleWidth, circleWidth);
      if(hit) {
        dataValueText= this.height;
        fill('red');
      } else {
        fill('hotpink');
      }
    rect(x,height,this.width,this.dramaticHeight);
  }

  this.render = function(iterator) {
    var x = iterator * 10;
    this.isMouseOnCircle(x);
    this.isMouseOnRect(x);
  }
}
console.log("read");

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

  fill('black');
  textSize(22);
  textFont("Bangers");
  text(dataValueText, 20, 100);
  
  
}