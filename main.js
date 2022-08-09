//search button
let search = document.querySelector(".search");

let input = document.querySelector(".input");
let img = document.querySelector(".img-search");
let hasPlaceholder = false;

img.addEventListener("click", function () {

    input.classList.toggle("style")
    if (hasPlaceholder == true) {
        input.removeAttribute("placeholder");
        hasPlaceholder = false;
    } else {
        input.setAttribute("placeholder", "search");
        hasPlaceholder = true;
    }

})

//slider
let next = document.querySelector(".right");
let previus = document.querySelector(".left");
let images = ["./images/lake.png", "./images/waterfall.jpg", "./images/rainforest.jpg"];
let articles = document.querySelector(".article")
let headers = ["Last Article", "An Oasis", "The Rainforest"]
let count = 0;

let sliderDiv = document.querySelector(".rightBottomSliderSection");
sliderDiv.style.backgroundImage = `url(${images[count]})`
articles.innerHTML = `${headers[count]}`

next.addEventListener("click", function(){
    console.log(count);
    count++
   if(count > images.length-1){
    count = 0
   }
   sliderDiv.style.backgroundImage = `url(${images[count]})`
   articles.innerHTML = `${headers[count]}`
})

previus.addEventListener("click", function(){
    count--
    console.log(count);
    if(count < 0){
        count = images.length-1
    }
   sliderDiv.style.backgroundImage = `url(${images[count]})`
   articles.innerHTML = `${headers[count]}`
})