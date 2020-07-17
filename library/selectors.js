import { Selector, t } from "testcafe";

export const Site = {
 
//For clicking buttons throughout the site 
  button: {
    button0: Selector("button").withText("Button 0"),
    back: Selector("button").withText("BACK"),
    clickMe: Selector("button").withText("Click me!"),
    randomize: Selector("button").withText("randomize"),
    pushTheButtons: Selector("a").withText("Push the buttons"),
    randomCircleColors: Selector('a').withText('Random Circle Colors'),
    submit: Selector("button").withText(/Submit/i),
    submitSecond: Selector("button").withText("Submit").nth(1),
    submitThird: Selector("button").withText("Submit").nth(2),
    submitFourth: Selector("button").withText("Submit").nth(3),
  },

//For clicking links throughout the site
  link: {
    about: Selector("a").withText("About"),
    contact: Selector("a").withText(/Contact/i),
    getElementById: Selector("a").withText("Testing getElementById"),
    peachURL: Selector('a').withText("feelslikepeach.com"),
    treehouseURL: Selector('a').withText("Treehouse Profile"),
    validateNumberLink: Selector("a").withText("Validate Number"),
  },

//For verifying page addresses assertions
  url: {
   aboutAddress: "roberthemfelt.com/about.html",
   contactAddress: "roberthemfelt.com/contact.html",
   mainAddress: "roberthemfelt.com",
   namesAddress: "roberthemfelt.com/names",
   peachAddress: "feelslikepeach.com",
   treehouseAddress: "teamtreehouse.com/rhemfelt",
  },
};
