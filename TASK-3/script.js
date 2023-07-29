searchButton = document.querySelector('.searchbutton')
searchBar = document.querySelector('.searchbar')


searchButton.addEventListener("click", () => {
    searchBar.classList.toggle('show');
});


burger = document.querySelector('.burger');
navMenu = document.querySelector('.nav-menu');


burger.addEventListener("click", () => {
    navMenu.classList.toggle('show-navmenu')
})