import App from './src/app.js';
import DOM from './src/dom.js';
import words from './src/words.js';


class Serivce {
    constructor() {
        const dom = new DOM('jarek','jpis');
        dom.render();
        const app = new App(words);
    }
}

const service = new Serivce();


