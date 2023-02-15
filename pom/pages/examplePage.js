import { Selector, t } from "testcafe";

class examplePage {
    constructor(){
        this.url = 'https://devexpress.github.io/testcafe/example';
        this.nameInput = Selector('input').withAttribute('data-testid', 'name-input');
        this.populateButton = Selector('input').withAttribute('data-testid', 'populate-button');
        this.importantToYou = {
            remoteTestingCheckbox: Selector('input').withAttribute('data-testid', 'remote-testing-checkbox'),
            reusingCodeCheckbox: Selector('input').withAttribute('data-testid', 'reusing-js-code-checkbox'),
            analysisCheckbox: Selector('input').withAttribute('data-testid', 'analysis-checkbox')
        };
        this.macosRadio = Selector('input').withAttribute('data-testid', 'macos-radio');
        this.preferredInterfaceSelect = Selector('select').withAttribute('data-testid', 'preferred-interface-select');
        this.preferredInterfaceSelectOption = this.preferredInterfaceSelect.find('option');
        this.submitButton = Selector('button').withAttribute('data-testid', 'submit-button');
    }
} export default new examplePage