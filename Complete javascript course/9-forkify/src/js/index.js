//ES6 Modules
/* import str from './models/Search';
import {
    add as a,
    multiply as m,
    ID
} from './views/searchView';

//import * as seacrhView from './views/searchView';

console.log(`Imported functions ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
*/


//importing package
import Search from './models/Search'
const search = new Search('pizza');
console.log(search);
search.getResults();