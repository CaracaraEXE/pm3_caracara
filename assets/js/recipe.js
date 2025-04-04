const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const receta = await response.json();

    setUpRecipe(receta);
};

main();
const recipeCont = document.querySelector(".recipecontainer");
const ingCont = document.querySelector(".ingcontainer ul");
const stepByStep = document.querySelector(".stepbystep ol");
const diffCont = document.querySelector(".recipediff");

const setUpRecipe = (recipe) => {

    document.title = recipe.name;

    document.querySelector(".recipename").innerHTML = recipe.name;
    document.querySelector("img").setAttribute("src",`${recipe.image}`);
    document.querySelector("img").setAttribute("alt",`${recipe.name}`);


    recipe.tags.forEach(tag => {
        const rectag = document.createElement("span");
        rectag.innerHTML += tag;
        rectag.classList.add("tag");
        document.querySelector(".recipetags").appendChild(rectag);
    })
    
    diffCont.innerHTML = recipe.difficulty;
    if(recipe.difficulty === "Hard"){
        diffCont.setAttribute("style","color:red;");
    };

    recipe.ingredients.forEach(ing => {
        ingCont.innerHTML += `
        <li>${ing}</li>
        `
    });

    recipe.instructions.forEach(step =>{
        stepByStep.innerHTML += `
        <li>${step}</li>
        `
    } )



};