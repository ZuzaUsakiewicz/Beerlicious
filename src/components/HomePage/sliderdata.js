import sliderOneImage from "../../images/josh-olalde-hH12vPERjwE-unsplash.jpg";
import sliderTwoImage from "../../images/jon-parry-XrPJ2J7QYKo-unsplash.jpg";
import sliderThreeImage from "../../images/jon-parry-PFICsHh7VAA-unsplash.jpg";
import sliderFourImage from "../../images/josh-olalde-LoKVYv5pVKc-unsplash.jpg";

const sliderdata = [
  {
    id: 1,
    img: `${sliderOneImage}`,
    title: "Beerlicious!",
    url: "/about",
    text: "Hello! We are probably the one and only Beerlicious brewery in the World! Nice to meet you!",
    buttonText: "read more",
  },
  {
    id: 2,
    img: `${sliderTwoImage}`,
    title: "The Best Beer Recipes",
    url: "/beers",
    text: "We made our Beers with love. The recipies we use are always refined.",
    buttonText: "meet us!",
  },
  {
    id: 3,
    img: `${sliderThreeImage}`,
    title: "Best Places for Our Beer",
    url: "/brewpub",
    text: "Find a place you want to grab our Beer!",
    buttonText: "Check!",
  },
  {
    id: 4,
    img: `${sliderFourImage}`,
    title: "Wanna Beer?",
    url: "/contact",
    text: "It's simple: you want beer - we give you a Beer.",
    buttonText: "contact us!",
  },
];

export default sliderdata;
