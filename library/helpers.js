import {
  ClientFunction,
  Selector,
  t,
   } from "testcafe";
import { Site } from "./selectors";

//Clicks  through all of the buttons on the Buttons page
export async function clickThroughButtons(buttonName) {
  for (let i = 0; i < buttonName.length; i++) {
      await t.click(buttonName[i]);
    }
};

//Runs through the "randomize hex circle colors" function 7 times
export async function randomizeButtons() {
  for (let i = 0; i < 7; i++) {
      await t.click(Site.button.randomize);
    }
};

//Returns a random number between 1-20
export async function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

//Validates that the correct output message is displayed on the "Validate Input" function
export async function validateRandomNumber(inputName) {
  let randomNumber = await getRandomNumber();
  await t.typeText(Selector(`[id="numb"]`), `${randomNumber}`, { replace: true });
  await t.click(Site.button.submit);
  if (randomNumber <= 10) {
  await t.expect(Selector('p').withText('Input OK').exists).ok('Number 7 should have validated true');
} else {await t.expect(Selector('p').withText('Input not valid').exists).ok('Number 12 should have validated false');}
};

//Validates that the correct output message is displayed on the second "Validate Input" function
export async function validateSecondRandomNumber(inputName) {
  let randomNumber = await getRandomNumber();
  await t.typeText(Selector(`[id="numb2"]`), `${randomNumber}`, { replace: true });
  await t.click(Site.button.submitAgain);
  if (randomNumber >= 11) {
  await t.expect(Selector('p').withText('Input OK').exists).ok('Number 7 should have validated true');
} else {await t.expect(Selector('p').withText('Input not valid').exists).ok('Number 12 should have validated false');}
};

//Runs through an array of contact info expected to be visible on the page
export async function verifyContactInfo(contactList) {
 for (let i = 0; i < contactList.length; i++) {
  async function runThroughContactArray(contactValue){
     await t
     .expect(Selector('a').withText(contactValue)
     .exists).ok();
   }
await runThroughContactArray(contactList[i]);
  }
}

export async function getPageAddress() {
  const url = ClientFunction(() => document.location.href);
  return url();
}
