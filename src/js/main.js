;
(() => {
    'use strict';

    /*variables*/
    const btnNav = document.querySelector('.btn_mobile');
    const nav = document.querySelector('.menu_nav');


    if (btnNav !== null && nav !== null) {
        (require('./modules/nav'))(btnNav, nav);
    }


})();
