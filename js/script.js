//Active header after scroll

window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset
    let header = document.querySelector('.header')
    yOffset > 24 ? header.classList.add("header-scrolled") : header.classList.remove("header-scrolled")
});

// Burger menu
const toggler = document.querySelector(`.block-menu__toggler`)
toggler.addEventListener('click', () => {
    auroraMethods.showMenu()
})
document.querySelector(`.mob-cross`).addEventListener('click', () => {
    auroraMethods.hideMenu()
})

//Accordion

document.querySelectorAll(`.links__title`).forEach((item) =>
    item.addEventListener(`click`, () => {
        const activeGroup = `links__group--active`
        const parent = item.parentNode;

        if (parent.classList.contains(activeGroup)) {
            parent.classList.remove(activeGroup)
        } else {
            document.querySelectorAll(`.links__group`).forEach((child) =>
                child.classList.remove(activeGroup))
            parent.classList.add(activeGroup)
        }
    })
)

//Search
const searchIcon = document.querySelector(`.search-icon`)
const activeSearch = `search-icon--active`


searchIcon.addEventListener('click', () => {
    if (searchIcon.classList.contains(activeSearch)) {
        auroraMethods.hideSearch()
    } else {
        auroraMethods.showSearch()
    }
})

const auroraMethods = {
    hideSearch: () => {
        searchIcon.classList.remove(activeSearch);
        searchIcon.innerHTML = '<svg class="search-icon__img"><use xlink:href="img/sprite.svg#search"></use></svg>'
        document.getElementById("search").style.display = "none"
    },
    showSearch: () => {
        searchIcon.classList.toggle(activeSearch)
        searchIcon.innerHTML = '<svg class="search-icon__img"><use xlink:href="img/sprite.svg#cross"></use></svg>'
        document.getElementById("search").style.display = "block"
    },
    showMenu: () => document.getElementById("menu--mob").style.display = "block",
    hideMenu: () => document.getElementById("menu--mob").style.display = "none",

}