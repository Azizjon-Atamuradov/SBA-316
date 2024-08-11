 const recipeList = document.getElementById('recipe-list');
 const recipeForm = document.getElementById('recipe-form');
 const searchBar = document.getElementById ('search-bar');
 const searchResults = document.getElementById('search-results');
 const searchButton = document.getElementById('search-buttton'); 



//  ready dishes 

const predifinedRecipes = [
    {
        name:"Pilaf",
        ingredients:"450 grams basmati rice, 600 grams stewing steak , 150 mL clarified butter , 4 onions (cut into wedges), 4 carrots,salt , 2 bay leaves ",
        image:"https://lh3.googleusercontent.com/RxoFt463ZYv18czIVW2EGH2ZDeddTSXm_cyzjhZFQBC03zZMYLS1zCcXKP5aIKCRNwgfa0YKYCk_rLnRG3mqng=w1280-h1280-c-rw-v1-e365"
    },

    {
        name: "Manti (Dumplings)",
        ingredients: "Ground meat (lamb or beef), onions, salt, black pepper, and dough.",
        image: "https://www.caterermiddleeast.com/cloud/2022/04/18/245823439_354966153039858_8755778330789253517_n-768x960.jpg"
    },
    {
        name: "Lagman (Noodle Soup)",
        ingredients: "1 lb. beef, 1/4 cup vegetable oil, 1 onion , 3 garlic cloves, 2 carrots, 2 potatoes, 2 tomatoes, 1 1/2 Tbsp. salt, 1 tsp. paprika powder  .",
        image: "https://womanexpertus.com/wp-content/uploads/2018/01/lagman-19-e1508414963939.jpg"
    },

    {
        name:"Samsa (Savory Pastry)",
        ingredients: "Puff pastry, ground meat, onions, and spices.",
        image:"https://adventuresoflilnicki.com/wp-content/uploads/2020/11/Uzbek-Samsa.jpg"
    },

{
        name:"Shashlik (Grilled Skewers)",
        ingredients: "marinade: 2 lb (beef,lamb or chicken), 2 large onions ,1/4 cup vegetable oil ,4-5 cloves of garlic ",
        image:"https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663717850_56-mykaleidoscope-ru-p-uzbekskii-shashlik-yeda-vkontakte-58.jpg"
    },
    {
        name:"Shurpa (meal soup)",
        ingredients:"1 lb lamb or beef, 8 cups water , 2 large onions, 3-4 medium potatoes, 2-3 carrots, 1-2 tomatoes,1 bell pepper ",
        image:"https://img.freepik.com/premium-photo/traditional-uzbek-meal-soup-shurpa-with-beef-vegetables-plate-with-oriental-ornament_114941-569.jpg"
    },
    {
        name:"Nan",
        ingredients:"4 cups all-purpose flour, 1 1/2 teaspoons salt, 1 teaspoon sugar, 1 1/2 cups warm water ",
        image:"https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/11/Non.jpg"
    },

    {
        name:"Chuchvara",
        ingredients:"3 cups all-purpose flour, 1 large egg, 1/2 teaspoon salt , 1 lb  ground beef or lamb, 1 medium onion, 2-3 cloves garlic,Salt and black pepper to taste",
        image:"https://www.caterermiddleeast.com/cloud/2022/04/18/Chuchvara-1024x1024.jpg"
    },
    {
        name:"Qazon kabob",
        ingredients:"2 lbs  lamb or beef, 4-5 medium potatoes, 2 large onions, 4-5 cloves of garlic, 1/4 cup vegetable oil",
        image:"https://i.ytimg.com/vi/YA6qB27WZD0/maxresdefault.jpg"
    },

    {
        name:"Dolma",
        ingredients:"1 lb   ground beef or lamb,1 cup rice, 1 medium onion, 2-3 cloves garli,1 jar of grape leaves ",
        image:"https://img.freepik.com/free-photo/dolma-stuffed-with-rice-meat_2829-18350.jpg?size=626&ext=jpg"
    },
]



//  fucntion to display all recipes on recipe pages 

function displayRecipes(recipes) {
    recipeList.innerHtml = '';  // clear existing recipes in the list
    recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
        <h2>${recipe.name}</h2> <!--Recipe Name -->
        <img src= "${recipe.image}" alt= "${recipe.name}" class= "recipe-image"> <!--Recipe Image --> 
        <p>${recipe.ingredients}</p> <!-- Ingredients List -->
        `;
        recipeList.appendChild(recipeItem);

    });
}
// function to display search results based on user input

function displaySearchResults(recipes) {
    searchResults.innerHTML = ''; // clear previous search results
    if (recipes.length === 0) { // check if there are no recipes found
        searchResults.innerHTML = '<p>No recipe found.</p>'; // display message if no recipes match
    } else {
        recipes.forEach(recipe => { // loop through each recipe in the results
            const recipeItem = document.createElement('div');  //create a new div for recipe
            recipeItem.classList.add('recipe-item'); // add class for styling
            recipeItem.innerHTML = `
            <h2>${recipe.name}</h2> <!-- Recipe Name -->
            <img src ="${recipe.image}" alt="${recipe.name}" class="recipe-image"> <!--Recipe Image --> 
            <p>${recipe.ingredients}</p> <!-- Ingredients List -->`;

            searchResults.appendChild(recipeItem); // add  recipe item to search results
            
        }) ;
    }
}

// function to filter recipes based on the search input 

function filterRecipes (query) {
    // filter predefined recipes based on whether the name includes the seaarch query
    const filterRecipes = predifinedRecipes.filter( recipe => 
        recipe.name.toLowerCase().includes(query.toLowerCase()) // case insensitive matching

    );
    displaySearchResults(filteredRecipes); // display the filtered results
}

/// add event listener to search button for triggering search
searchButton.addEventListener ('click', function() {
    filterRecipes(searchBar.value); //call filter function with the search bar value 
});


//  add event listener to the search bar for pressing "enter " key

searchBar.addEventListener ('keypress', function(event) {
    if (event.key === 'Enter') {                //check if the key pressed is enter
        filterRecipes(searchBar.value);            //call filter function with search bar value 
    }
}) ;

/// add event listener to the form for submiting new recipes

recipeForm.addEventListener('submit', addRecipe); /// call addrecipe func on form submission

// function to handle adding a new recipe 

function addRecipe(event) {
    event.preventDefault();              //prevent the default from submission behavior
    const name = document.getElementById('recipe-name').value.trim();  /// get the name from the input
    const ingredients = document.getElementById('recipe-ingredients').value.trim(); // get ingredients from the input
    const image = prompt ("Enter image URL for the recipe:");   // prompt use for an image url

    // check if any fields are empty

    if (!name || !ingredients || !image) {
        alert('Please fill in all fields');      // alert user to fill in all fields
        return;            // exit the function
    }
// add new recipe to the predifined recipes array
predifinedRecipes.push({ name, ingredients, image });
recipeForm.reset(); // clear the form inputs
navigate ('recipes');   // navigate to recipes page to display updated list 

}



