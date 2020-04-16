import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Verify Page Buttons`.page`http://roberthemfelt.com`;

test("Index Page Header Info", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.expect(await helpers.getPageAddress()).contains(Site.url.mainAddress);
  await t.expect(Selector('h1').withAttribute("id","shadow").innerText).eql("Robert Hemfelt");
  });