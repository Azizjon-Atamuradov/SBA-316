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