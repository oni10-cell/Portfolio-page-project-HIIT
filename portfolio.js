const menuButton = document.querySelector(".fa-bars");
const menu = document.getElementById("nav-bar-mobile")
const mainPage = document.getElementById("main-page");

const projectButton = document.getElementById("button")
const rightArrow = document.getElementById("right-arrow");

const socio = document.querySelectorAll(".socio");
const socioChild = document.querySelectorAll(".socio-child");

// navigation bar
menuButton.addEventListener("click", function(e){
    if(menu.style.display != "block"){
    menu.style.display = "block";
    // console.log(menu.style.display)
    return
    }
    if(menu.style.display = "block"){
         menu.style.display = "none";
    }
})

        
        mainPage.addEventListener("click", function(e){
            menu.style.display = "none";
        })
        
        // console.log(menu.style.display)

// button animation
projectButton.onmouseenter = (e) =>{
    rightArrow.classList.toggle("right-arrow-hover");
}
projectButton.onmouseleave = (e) =>{
    rightArrow.classList.toggle("right-arrow-hover");
}

// contact-socials-socio animation

socio.forEach(element => {
    const socioPage = element.children;
    
    element.onmouseenter = () =>{
        socioPage[0].style.color = "#637A9B";
        socioPage[1].style.color = "#637A9B";
    }
    
    element.onmouseleave = (e) =>{
        socioPage[0].style.color = "#fff";
        socioPage[1].style.color = "#fff";
    }
    
    // const socioPage = element.childNodes;

        // console.log(socioPage[0])
        
        // // console.log(socioPage2.__proto__)
        // element.onmouseenter = () => {
        //     socioPage.forEach(data => {
        //         data.style.color = "#637A9B";
        //     })
        //     // socioPage[0].style.color = "#637A9B";
        //     // socioPage[1].style.color = "#637A9B";
        // }
});

// const person =  {}

// const name = new String("John")
// let output = name.length
// console.log(output)
// console.log(name.__proto__)

// console.log(person.__proto__)