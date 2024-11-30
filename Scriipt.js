// Images
const fulimgBox = document.getElementById("fulimgBox"),
fulimg =document.getElementById("fulimg");

function openfulimg(reference){
    fulimgBox.style.display = "flex";
    fulimg.src = reference
}

function closeimg(){
    fulimgBox.style.display = "none";
}