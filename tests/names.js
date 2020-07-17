import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Verify Page Buttons`.page`http://roberthemfelt.com/names`;

test("Verify Page Buttons", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await helpers.reRandomize();
  await t.expect(await helpers.getPageAddress()).contains(Site.url.namesAddress);
  });