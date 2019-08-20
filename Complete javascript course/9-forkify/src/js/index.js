//Global Sate of the app.
//Search Object
//Shopping list object
//liked recipes


//importing package
import Search from "./models/Search";
import * as searchView from './views/searchView';
import Recipe from './models/Recipe'
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';


const state = {};




// Search Controller
const controlSearch = async () => {
    //Get query from view.
    const query = searchView.getInput;

    if (query) {
        //New search object and add to state.
        state.search = new Search(query);

        // prepare UI for reults.
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        // Search for recipies.
        await state.search.getResults(); //<<Promise returned

        // Render results on UI.
        clearLoader();
        searchView.renderResults(state.search.result);
    }
};

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
    console.log('id');

    if (id) {
        //Prepare UI for changes.

        //Create new recipe object.
        state.recipe = new Recipe(id);
        //Get recipe data. 
        await state.recipe.getRecipe();
        //Calculate servings and time.
        state.recipe.calcTime();
        state.recipe.calcServings();
        //Render recipe
        console.log(state.recipe);
    }
};

window.addEventListener('hashchange', controlRecipe);