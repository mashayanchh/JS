alert("Вітаємо Вас на нашому сайті!");

var imageArray = [
  "img.jpg",
  "img2.jpg",
  "img3.jpg"
];
window.number = "0" ;
var imageCount = imageArray.length;
function image(num) {
  if (num ==1) {
    if (number < imageCount -1) {
        number++;
        document.getElementById('images').src = imageArray[number];
        document.getElementById('num.img').innerHTML = number + 1 + '/' + imageCount;
    }
  }
  else {
    if (number > 0) {
        number--;
        document.getElementById('images').src = imageArray[number];
        document.getElementById('num.img').innerHTML = number + 1 + '/' + imageCount; 
    }
  }
}
function btn_show() {
  if(number != 0)
   document.getElementById('left').style.display = 'block';
  if(number != imageCount-1) 
   document.getElementById('right').style.display = 'block';
}
function btn_noshow() {
   document.getElementById('left').style.display = 'none';
   document.getElementById('right').style.display = 'none';
}
document.write ('<img id = "images" src = "'+imageArray[0] + '">');

document.getElementById("images").style.width = "600px";
document.getElementById("images").style.marginLeft = "30%";

