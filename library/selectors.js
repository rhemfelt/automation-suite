import { Selector, t } from "testcafe";

export const Site = {
  button: {
    button0: Selector("button").withText("Button 0"),
    back: Selector("button").withText("BACK"),
    clickMe: Selector("button").withText("Click me!"),
    randomize: Selector("button").withText("randomize"),
    pushTheButtons: Selector("a").withText("Push the buttons"),
    randomCircleColors: Selector('a').withText('Random Circle Colors'),
    submit: Selector("button").withText(/Submit/i),
    submitAgain: Selector("button").withText("Submit").nth(1),
  },

  link: {
    about: Selector("a").withText("About"),
    contact: Selector("a").withText(/Contact/i),
    getElementById: Selector("a").withText("Testing getElementById"),
    peachURL: Selector('a').withText("feelslikepeach.com"),
    treehouseURL: Selector('a').withText("Treehouse Profile"),
  },
};
