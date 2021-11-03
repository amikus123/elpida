export interface CardData {
  topText: string;
  imageName: string;
  bottomText: string;
  link: string;
}
export interface Ad {
 signIn:boolean,
 addName:string
}
export type CardArr = (Ad | CardData)[];
export const firtsRow: CardArr = [
  {
    topText: "AmazonBasics",
    imageName: "amazonBasics",
    bottomText: "See more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
];


export const secondRow: CardArr = [
  {
    topText: "AmazonBasics",
    imageName: "amazonBasics",
    bottomText: "See more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
  
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },

  {
    signIn:true,
    addName:"ad1"
  }

];
