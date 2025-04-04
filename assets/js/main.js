const recetasGrid = document.querySelector(".recetas_grid");

const main = async () => {
    const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`;
    const response = await fetch(API_URL);
    const recipesData = await response.json();

    console.log(recipesData);

    const inyectRecipes =
    recipesData.recipes.forEach(receta => {
        recetasGrid.innerHTML +=
        `
        <div class='receta'>
        <img src='${receta.image}' alt='${receta.name}'>
            <h3>${receta.name}</h3>
        <a href="/recipe.html?id=${receta.id}">Ver más</a>
        </div>
        `;
    }); 
}
main();


//HOLA GITHUB


//Devuelve un objeto
//Key > Recipes, tiene un array