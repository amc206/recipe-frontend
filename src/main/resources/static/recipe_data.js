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

}

