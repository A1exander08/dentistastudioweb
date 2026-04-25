
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#header01");
const CShamburgerMenu = document.querySelector("#header01 .cs-toggle");

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('scroll', (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
        document.querySelector('body').classList.add('scroll')
    } else {
        document.querySelector('body').classList.remove('scroll')
    }
});


const dropDowns = Array.from(document.querySelectorAll('#header01 .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
}

// chiude il menu mobile quando si clicca un link
const navLinks = document.querySelectorAll('#header01 .cs-li-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        CShamburgerMenu.classList.remove("cs-active");
        CSnavbarMenu.classList.remove("cs-active");
        CSbody.classList.remove("cs-open");

        const csUL = document.querySelector('#cs-expanded');
        csUL.setAttribute('aria-expanded', 'false');
    });
});