const tabList = document.querySelector(".tab-list");
const tab = tabList.querySelectorAll("#planet-btn");

let tabFocus = 0;

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    // change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tab[tabFocus].setAttribute("tabindex", -1);
    }
    // if the right key is pushed, move to the next tab on the right
    if(e.keycode === keydownRight) {
        tabFocus++;
        console.log(tabFocus);
    }

    // if the left key is pushed, move to the next tab on the left
    if(e.keycode === keydownLeft) {
        tabFocus--;
        console.log(tabFocus);
    }

    tab[tabFocus].setAttribute("tabindex", 0);
    tab[tabFocus];
})

