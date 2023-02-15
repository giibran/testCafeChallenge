import { Selector } from "testcafe";
import { common } from "../data.js/common";

class thankYouPage {
    constructor(){
        this.url = 'https://devexpress.github.io/testcafe/example/thank-you.html';
        this.thankYouHeader = Selector('h1').withAttribute('data-testid', 'thank-you-header').withText(common.name);
    }
} export default new thankYouPage