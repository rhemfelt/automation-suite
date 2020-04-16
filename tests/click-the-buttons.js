import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Verify Page Buttons`.page`http://roberthemfelt.com`;

test("Verify Page Buttons", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.about);
  await t.expect(await helpers.getPageAddress()).contains(Site.url.aboutAddress);
  await t.click(Site.button.pushTheButtons);
  await helpers.clickThroughButtons([
    Selector("button").withText("Button 0"),
    Selector("button").withText("Button 1"),
    Selector("button").withText("Button 2"),
    Selector("button").withText("Button 3"),
    Selector("button").withText("Button 4"),
    Selector("button").withText("Button 5"),
    Selector("button").withText("Button 6"),
    Selector("button").withText("Button 7"),
    Selector("button").withText("Button 8"),
    Selector("button").withText("Button 9"),
  ]);
  await t.click(Site.button.back);
  await t.click(Site.button.randomCircleColors);
  await helpers.randomizeButtons();
  await t.click(Site.button.back);
  });

test("Change Font Color Button", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.about);
  await t.expect(await helpers.getPageAddress()).contains(Site.url.aboutAddress);
  await t.click(Site.link.getElementById);
  await t.click(Site.button.clickMe);
  await t.expect(Selector(`[id="bigpic"]`).exists).ok('The image file should have appeared when button was clicked');
    });
