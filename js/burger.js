const buttonBurger=document.querySelector(".button-menu"),openMenu=()=>{buttonBurger.addEventListener("click",openMenuHandler)},openMenuHandler=()=>{const e=document.querySelector(".menu");e.classList.contains("menu--open")?(e.classList.remove("menu--open"),buttonBurger.classList.remove("button-menu--open")):(e.classList.add("menu--open"),buttonBurger.classList.add("button-menu--open"))};export{openMenu};