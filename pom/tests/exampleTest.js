import { ClientFunction } from "testcafe";
import { common } from "../data.js/common";
import examplePage from "../pages/examplePage";
import thankYouPage from "../pages/thankYouPage";

fixture`Example Page test suit`
    .page`${examplePage.url}`

test('Validate that Submit is not enabled without a value for name', async t => {
    await t.expect(examplePage.nameInput.innerText).eql('');
    await t.expect(examplePage.submitButton.withAttribute('disabled', 'disabled').exists).ok();
})

test('Send form after fill information', async t => {
    const getLocation = ClientFunction(() => document.location.href);

    await t
        .setNativeDialogHandler(() => true)
        .click(examplePage.populateButton);
    await t
        .typeText(examplePage.nameInput, common.name, { replace: true });
    await t.click(examplePage.importantToYou.remoteTestingCheckbox);
    await t.click(examplePage.importantToYou.reusingCodeCheckbox);
    await t.click(examplePage.importantToYou.analysisCheckbox);
    await t.click(examplePage.macosRadio);
    await t
        .click(examplePage.preferredInterfaceSelect)
        .click(examplePage.preferredInterfaceSelectOption.withText('JavaScript API'));
    await t.click(examplePage.submitButton);
    await t.expect(getLocation()).contains(thankYouPage.url);
    await t.expect(thankYouPage.thankYouHeader.exists).ok()
});