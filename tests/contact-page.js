import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Contact Page`.page`http://roberthemfelt.com`;

let contactArray = [
  "rhemfelt@gmail.com",
  "214.535.6407",
  "@RobertHemfelt"
];

test("Validate Input Assertions", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.contact);
  await helpers.verifyContactInfo(contactArray);
  });
