//Active header after scroll

window.addEventListener('scroll', function () {
    yOffset = window.pageYOffset;
    let header = document.querySelector('.header')
    if (yOffset > 24) {
        header.classList.add("header-scrolled")
    } else {
        header.classList.remove("header-scrolled")
    }
});

// Burger menu
document.querySelectorAll(`.block-menu__toggler`).forEach((item) =>
    item.addEventListener('click', () => {
        document.getElementById("menu--mob").style.display = "block";
    }
    ))
document.querySelectorAll(`.mob-cross`).forEach((item) =>
    item.addEventListener('click', () => {
        document.getElementById("menu--mob").style.display = "none";
    }))


//Accordion

document.querySelectorAll(`.links__title`).forEach((item) =>
    item.addEventListener(`click`, () => {
        const parent = item.parentNode;

        if (parent.classList.contains(`links__group--active`)) {
            parent.classList.remove(`links__group--active`)
        } else {
            document.querySelectorAll(`links__group`).forEach((item) =>
                item.classList.remove(`links__group--active`))
            parent.classList.toggle(`links__group--active`)
        }
    })
)

//Search

document.querySelectorAll(`.search-icon`).forEach((item) =>
    item.addEventListener('click', () => {

        if (item.classList.contains(`search-icon--active`)) {
            item.classList.remove(`search-icon--active`)
            item.innerHTML = '<svg class="search-icon__img"><use xlink:href="img/sprite.svg#search"></use></svg>'
            document.getElementById("search").style.display = "none";
        } else {
            item.classList.toggle(`search-icon--active`)
            item.innerHTML = '<svg class="search-icon__img"><use xlink:href="img/sprite.svg#cross"></use></svg>'
            document.getElementById("search").style.display = "block";
        }

    }))