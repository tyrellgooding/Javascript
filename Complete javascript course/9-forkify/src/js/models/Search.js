import axios from 'axios';

export default class seach {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '8484081afcb5ffb6829d3a18c37e7208'
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
};