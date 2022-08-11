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

next.addEventListener("click", function () {
    console.log(count);
    count++
    if (count > images.length - 1) {
        count = 0
    }
    sliderDiv.style.backgroundImage = `url(${images[count]})`
    articles.innerHTML = `${headers[count]}`
})

previus.addEventListener("click", function () {
    count--
    console.log(count);
    if (count < 0) {
        count = images.length - 1
    }
    sliderDiv.style.backgroundImage = `url(${images[count]})`
    articles.innerHTML = `${headers[count]}`
})

//api
//let apiBox = document.querySelector(".apiBox")
const getInfo = async () => {
    try {
        const info = await fetch("api.json").then(_ => _.json())
        console.log(info);
        let cardBox = document.querySelector(".cardBox")
        info.map((item) => {
            console.log(item.txt1);
            let card = document.createElement("div")
            cardBox.appendChild(card)
            let image = document.createElement("img")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            card.append(image, p1, p2)
            image.setAttribute("src", item.img)
            image.classList.add("photo")
            p1.innerHTML = item.txt1;
            p2.innerHTML = item.txt2;
            p2.style.marginTop = "40px"
            p1.style.marginTop = "20px"

        })
    } catch (error) {
        console.log(error);
    }
}


getInfo();

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>=300){
        section3.style.marginLeft="5%"
    }
})
