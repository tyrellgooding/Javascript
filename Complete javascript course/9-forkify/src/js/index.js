//Global Sate of the app.
//Search Object
//Shopping list object
//liked recipes


//importing package
import Search from "./models/Search";
import * as searchView from './views/searchView';
import {
    elements
} from './views/base';


const state = {};

const controlSearch = async () => {
    //Get query from view.
    const query = searchView.getInput;

    if (query) {
        //New search object and add to state.
        state.search = new Search(query);

        // prepare UI for reults.
        searchView.clearInput();
        searchView.clearResults();

        // Search for recipies.
        await state.search.getResults(); //<<Promise returned

        // Render results on UI.
        searchView.renderResults(state.search.result);
    }
};

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});