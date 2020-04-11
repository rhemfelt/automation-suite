import { Selector, t } from "testcafe";
import { Role } from "testcafe";
import { Site } from "../library/selectors";
import * as helpers from "../library/helpers";

fixture`Validate Input Values`.page`http://roberthemfelt.com`;

export async function runThroughTenRandomNumbers() {
  for (let i = 0; i < 10; i++) {
      await helpers.validateRandomNumber();
    }
};

export async function runThroughFiveRandomNumbers() {
  for (let i = 0; i < 5; i++) {
      await helpers.validateSecondRandomNumber();
    }
};

test("Validate Input Assertions", async (t) => {
  await t.setNativeDialogHandler(() => true);
  await t.click(Site.link.about);
  await t.click(Selector("a").withText("Validate Number"));
  //Verifies the expected output string of the Validate Number function 10 times
  await runThroughTenRandomNumbers();
  //Verifies the expected output string of the second Validate Number function 5 times
  await runThroughFiveRandomNumbers();
  });
