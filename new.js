// Images
const fuulimgBox = document.getElementById("fuulimgBox"),
fuulimg =document.getElementById("fuulimg");

function openfulimg(reference){
    fuulimgBox.style.display = "flex";
    fuulimg.src = reference
}

function closeimg(){
    fuulimgBox.style.display = "none";
}