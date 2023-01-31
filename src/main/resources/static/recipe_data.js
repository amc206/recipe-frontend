//run this function on page load
window.onload = loadRecipes;

function loadRecipes()
{
    let uri = "http://localhost:8080/recipes";
    //pass in security info, headers, MIME types, HTTP verbs: in params
    let params = {
        method: "get",
        mode: "cors"
    };

    //fetch says: go make a remote HTTP request to that endpoint and get a response back
    fetch(uri, params)
        .then(function(response) {
        console.log(response);
        return response.json();


        //if(response.status == 200) {}
    })
        .then(function(json){
            console.log(json);
            showRecipes(json);
        });
}

function showRecipes(recipes)
{
    //get list
    let list = document.getElementById("recipes");

    //loop over all recipes
    for (let i = 0; i < recipes.length; i++)
    {
        //add each recipe to the list
        let recipe = recipes[i];
        //let name = recipe.name;

        //get list item and put the name in the list item and add to the list
        //create element using a function on document
        let li = document.createElement("li"); //<li></li> <-- what it looks like
        li.innerHTML = recipe.name; //<li>Tacos</li> <--what it looks like now

        //add spans
        let servingSpan = document.createElement("span");
        let timeSpan = document.createElement("span");

        servingSpan.className = "servings"; //css class in ""
        timeSpan.className = "cook-time"; //css class in ""

        servingSpan.innerHTML = recipe.servings + " servings";
        timeSpan.innerHTML = recipe.cookTime + " minutes";

        li.appendChild(servingSpan);
        li.appendChild(timeSpan);

        //attach the li to the DOM
        list.appendChild(li);

        //<li>Salad <span>6 servings</span> <span>30 minutes</span></li>

    }

}

