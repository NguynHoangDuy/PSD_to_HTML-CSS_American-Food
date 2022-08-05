const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function(){
    menuHeader.classList.add(expandClass);
})
window.addEventListener("click", function(e){
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle") )
        {
            menuHeader.classList.remove(expandClass);
        }
})


// $(document).ready(function(){
//     $('.events-list').slick({

//     });
//   });
function slide() {
    const slide1 = document.querySelector("#slide1");
    const slide2 = document.querySelector("#slide2");
    const slide3 = document.querySelector("#slide2");
    const eventItem = document.getElementsByClassName("events-item");
    let translateX = slide1.checked === true ? 0 : slide2.checked === true ? 100 : 200
    eventItem[0].style.transform = `translateX(${-translateX}%)`
    eventItem[1].style.transform = `translateX(${-translateX}%)`
    eventItem[2].style.transform = `translateX(${-translateX}%)`
}