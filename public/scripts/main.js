"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand";function slide(){var e=document.querySelector("#slide1"),t=document.querySelector("#slide2"),n=(document.querySelector("#slide2"),document.getElementsByClassName("events-item")),e=!0===e.checked?0:!0===t.checked?100:200;n[0].style.transform="translateX("+-e+"%)",n[1].style.transform="translateX("+-e+"%)",n[2].style.transform="translateX("+-e+"%)"}menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)});