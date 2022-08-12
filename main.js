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


// const myBoxes = document.querySelector(".cardBox")
// window.addEventListener('scroll', boxAnimation)

// function boxAnimation() {
//     const bottomTrigger =  (window.innerHeight / 5) * 4
//     myBoxes.forEach(box => {
//        const boxTop = box.getBoundingClientRect().top;
//        if(boxTop < bottomTrigger){
//         box.classList.add('reveal')
//        }else{
//         box.classList.remove('reveal')
//        }
//     })
// }


//header li changes color
function changeColor() {
    var li = document.querySelector(".liHeader").style.color = "red"
}
function backColor() {
    var li = document.querySelector(".liHeader").style.color = ""
}

function changeColor1() {
    var li = document.querySelector(".liHeader1").style.color = "green"
}
function backColor1() {
    var li = document.querySelector(".liHeader1").style.color = ""
}

function changeColor2() {
    var li = document.querySelector(".liHeader2").style.color = "blue"
}
function backColor2() {
    var li = document.querySelector(".liHeader2").style.color = ""
}
function changeColor3() {
    var li = document.querySelector(".liHeader3").style.color = "orange"
}
function backColor3() {
    var li = document.querySelector(".liHeader3").style.color = ""
}

//change background img and text on hover
function change() {
    let zealandBackground = document.querySelector(".zealandBackground").style.backgroundImage = "url(./images/dingo.jpg)"
    let newClimbing = document.querySelector(".newClimbing").innerHTML = "Running Dingo"
}
function notChange() {
    let zealandBackground = document.querySelector(".zealandBackground").style.backgroundImage = ""
    let newClimbing = document.querySelector(".newClimbing").innerHTML = "Climbing New Zealand"
}

//email validation
function validateForm() {

    var x = document.forms["testForm"]["email"].value;

    var atpos = x.indexOf("@");

    var dotpos = x.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {

        alert("Please enter a valid email address.");

        return false;

    } else {
        alert("Success!!!")

        return false
    }

}

//hidden div
function myHiddenDiv() {
    let x = document.querySelector(".hidden")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}