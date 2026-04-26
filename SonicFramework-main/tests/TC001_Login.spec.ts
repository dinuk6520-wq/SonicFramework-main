import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

let firstName = FakerData.getFirstName()
//test.use({ storageState: "logins/salesforceLogin.json" })
test(` creating Lead`, async ({ SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'Dilip' },
        { type: 'TestCase', description: 'Creating Lead' },
    );

    await SalesforceHome.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher()

})