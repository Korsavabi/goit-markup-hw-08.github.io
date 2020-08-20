window.onload = function (){
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = '<svg class="openMenu-svg-close"><use href="./img/burger/sprite.svg#icon-close"></use></svg>';
        } else {
            menu.classList.remove("active");
            this.innerHTML = '<svg class="openMenu-svg"><use href="./img/burger/sprite.svg#icon-menu"></use></svg>';
            
        }
    }
}