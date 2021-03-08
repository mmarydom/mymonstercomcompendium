var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
