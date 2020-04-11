import { Selector, t } from "testcafe";

export const Site = {
  button: {
    button0: Selector("button").withText("Button 0"),
    back: Selector("button").withText("BACK"),
    clickMe: Selector("button").withText("Click me!"),
    randomize: Selector("button").withText("randomize"),
    submit: Selector("button").withText(/Submit/i),
    submitAgain: Selector("button").withText("Submit").nth(1),
  },

  link: {
    about: Selector("a").withText("About"),
    contact: Selector("a").withText(/Contact/i),
  },
};
