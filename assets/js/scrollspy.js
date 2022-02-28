window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    document.querySelectorAll('.main-navigation a[href]:not([rel="external"])').forEach((el) => {
        el.addEventListener('click', (evt) => {
            let target = document.querySelector(evt.target.closest('a[href]').hash)
            if (target !== null) {
                target.scrollIntoView({ behavior: 'smooth' })
                evt.preventDefault();
            }
        });
    });
});

window.addEventListener('scroll', () => {
    "use strict";
    document.querySelectorAll('.main-navigation').forEach((el) => {
        if (document.body.scrollTop > (window.innerHeight - el.clientHeight)) {
            el.classList.add('is-solid');
        } else {
            el.classList.remove('is-solid');
        }
    });
});