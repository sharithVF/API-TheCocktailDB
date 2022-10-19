// https://www.thecocktaildb.com/api.php 
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

const search = document.getElementById("search");
const container = document.getElementById("container");

window.addEventListener("DOMContentLoaded", () => {
    let URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
    dataFilter(URL);
})

search.addEventListener("keyup", () => {
    let URLDrinks = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`
    dataFilter(URLDrinks);
})

function dataFilter(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        container.textContent = (null);
        data.drinks.map(drinksCocktails => createCards(drinksCocktails));
    });
}

function createCards(drinksCocktails) {
    const img = document.createElement("img");
    img.src = drinksCocktails.strDrinkThumb;
    img.setAttribute('alt', drinksCocktails.strDrink);
    img.classList = "img-drinks";

    const h2 = document.createElement("h2");
    h2.textContent = drinksCocktails.strDrink;
    h2.classList = "nameDrinks";

    const div = document.createElement("div");
    div.classList = "divCards";

    div.appendChild(h2);
    div.appendChild(img);
    container.appendChild(div);
}