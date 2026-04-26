import { test } from "../customFixtures/salesForceFixture"

test(` Mobile Publisher testCase`, async ({ page, SalesforceHome, SalesforceMobilePublisher }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Dilip' },
        { type: 'TestCase', description: 'Mobile' },
    );


    await SalesforceHome.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.verifyHomeLabel();
    await SalesforceHome.clickMobilePublisher();
    await SalesforceMobilePublisher.clickConfirmButton();
    await SalesforceMobilePublisher.clickProduct();
})