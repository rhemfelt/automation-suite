import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Contact Info`.page`http://roberthemfelt.com`;

let contactArray = [
  "rhemfelt@gmail.com",
  "214.535.6407",
  "@RobertHemfelt"
];

test("Validate Input Assertions", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.contact);
  await t.expect(await helpers.getPageAddress()).contains(Site.url.contactAddress);
  await helpers.verifyContactInfo(contactArray);
  await t.click(Site.link.peachURL);
  await t.expect(await helpers.getPageAddress()).contains(Site.url.peachAddress);
  await t.click(Selector('a').withText("CONTACT"));
  await t.typeText(Selector(`[name="fname"]`), "TestCafe", { replace: true });
  await t.typeText(Selector(`[name="lname"]`), "User", { replace: true });
  await t.typeText(Selector(`[name="email"]`), "rhemfelt+testcafe@rabbet.com", { replace: true });
  await t.click(Selector(`[value="Submit"]`));
//Verifies you cannot submit the form without Message and Subject
  await t.expect(Selector('div').withText('Subject is required.').exists).ok('Should not be able to submit form without Subject Line');
  await t.expect(Selector('div').withText('Message is required.').exists).ok('Should not be able to submit form without Message');
  });

test("TreeHouse Link", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.about);
  await t.click(Site.link.treehouseURL);
//verifies you are redirected to the correct TreeHouse URL
  await t.expect(await helpers.getPageAddress()).contains(Site.url.treehouseAddress);
  await t.expect(Selector('h1').withText('7,303').exists).ok('Total points should be 7,303');
    });
