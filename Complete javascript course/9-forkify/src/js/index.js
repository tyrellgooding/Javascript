//Global Sate of the app.
//Search Object
//Shopping list object
//liked recipes


//importing package
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';


const state = {};


// Search Controller
const controlSearch = async () => {
    //Get query from view.
    const query = searchView.getInput();

    if (query) {
        //New search object and add to state.
        state.search = new Search(query);

        // prepare UI for reults.
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // Search for recipies.
            await state.search.getResults(); //<<Promise returned

            // Render results on UI.
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }

    }
}

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }

});


//Recipe controller
const controlRecipe = async () => {

    //Get ID from URL 
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        //Prepare UI for changes.
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //Highlight selected search item.
        if (state.search) searchView.highlightSelected(id);


        //Create new recipe object.
        state.recipe = new Recipe(id);

        try {
            //Get recipe data and parse ingredients. 
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //Calculate servings and time.
            state.recipe.calcTime();
            state.recipe.calcServings();

            //Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch (err) {
            console.log(err);
            alert('Error processing recipe.');
        }

    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));



//Handeling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        //Decrease button is clicked.
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }

    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        //Increase Button is clicked.
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
});

window.l = new List();