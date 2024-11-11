const forw = document.getElementById("btn1");
const back = document.getElementById("btn2");
const img = document.getElementById("img");
const images = ["images/b1 (1).jpg","images/b1 (2).jpg","images/b1 (3).jpg","images/b1 (4).jpg"];
let currIdx = 0;
img.src = images[currIdx];


forw.addEventListener("click",()=>{
    currIdx++;
    if(currIdx==images.length)currIdx = 0;
    img.src = images[currIdx];
});

back.addEventListener("click",()=>{
    currIdx--;
    if(currIdx == -1)currIdx = images.length-1;
    img.src = images[currIdx];
});

console.log(images)