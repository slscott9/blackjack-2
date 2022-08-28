export interface Card {
    name: string,
    value: number,
    valueHigh: number,
    imgSrc: string
}

export const cards: any = [
    { name: 'ace', imgSrc: "assets/cards/aceOfClubs.png", value: 1, valueHigh: 10},
    { name: 'ace', imgSrc: "assets/cards/aceOfDiamonds.png", value: 1, valueHigh: 10 },
    { name: 'ace', imgSrc: "assets/cards/aceOfHearts.png", value: 1, valueHigh: 10 },
    { name: 'ace', imgSrc: "assets/cards/aceOfSpades.png", value: 1, valueHigh: 10 },
    { name: 'eight', imgSrc: "assets/cards/eightOfClubs.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfDiamonds.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfHearts.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfSpades.png", value: 8 },
    { name: 'five', imgSrc: "assets/cards/fiveOfClubs.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfDiamonds.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfHearts.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfSpades.png", value: 5 },
    { name: 'four', imgSrc: "assets/cards/fourOfClubs.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfDiamonds.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfHearts.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfSpades.png", value: 4 },
    { name: 'ten', imgSrc: "assets/cards/jackOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfSpades.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfSpades.png", value: 10 },
    { name: 'nine', imgSrc: "assets/cards/nineOfClubs.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfDiamonds.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfHearts.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfSpades.png", value: 9 },
    { name: 'ten', imgSrc: "assets/cards/queenOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/queenOfDiamonds.png", value: 10, },
    { name: 'ten', imgSrc: "assets/cards/queenOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/queenOfSpades.png", value: 10 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfClubs.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfDiamonds.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfHearts.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfSpades.png", value: 7 },
    { name: 'six', imgSrc: "assets/cards/sixOfClubs.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfDiamonds.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfHearts.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfSpades.png", value: 6 },
    { name: 'ten', imgSrc: "assets/cards/tenOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfSpades.png", value: 10 },
    { name: 'three', imgSrc: "assets/cards/threeOfClubs.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfDiamonds.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfHearts.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfSpades.png", value: 3 },
    { name: 'two', imgSrc: "assets/cards/twoOfClubs.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfDiamonds.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfHearts.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfSpades.png", value: 2 }
  ]


  //Soft totals
  export const aces: any = [
    { name: 'ace', imgSrc: "assets/cards/aceOfClubs.png", value: 1, valueHigh: 10},
    { name: 'ace', imgSrc: "assets/cards/aceOfDiamonds.png", value: 1, valueHigh: 10 },
    { name: 'ace', imgSrc: "assets/cards/aceOfHearts.png", value: 1, valueHigh: 10 },
    { name: 'ace', imgSrc: "assets/cards/aceOfSpades.png", value: 1, valueHigh: 10 },
  ]

  export const cardsNoAces = [
    { name: 'eight', imgSrc: "assets/cards/eightOfClubs.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfDiamonds.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfHearts.png", value: 8 },
    { name: 'eight', imgSrc: "assets/cards/eightOfSpades.png", value: 8 },
    { name: 'five', imgSrc: "assets/cards/fiveOfClubs.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfDiamonds.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfHearts.png", value: 5 },
    { name: 'five', imgSrc: "assets/cards/fiveOfSpades.png", value: 5 },
    { name: 'four', imgSrc: "assets/cards/fourOfClubs.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfDiamonds.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfHearts.png", value: 4 },
    { name: 'four', imgSrc: "assets/cards/fourOfSpades.png", value: 4 },
    { name: 'ten', imgSrc: "assets/cards/jackOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/jackOfSpades.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/kingOfSpades.png", value: 10 },
    { name: 'nine', imgSrc: "assets/cards/nineOfClubs.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfDiamonds.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfHearts.png", value: 9 },
    { name: 'nine', imgSrc: "assets/cards/nineOfSpades.png", value: 9 },
    { name: 'ten', imgSrc: "assets/cards/queenOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/queenOfDiamonds.png", value: 10, },
    { name: 'ten', imgSrc: "assets/cards/queenOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/queenOfSpades.png", value: 10 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfClubs.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfDiamonds.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfHearts.png", value: 7 },
    { name: 'seven', imgSrc: "assets/cards/sevenOfSpades.png", value: 7 },
    { name: 'six', imgSrc: "assets/cards/sixOfClubs.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfDiamonds.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfHearts.png", value: 6 },
    { name: 'six', imgSrc: "assets/cards/sixOfSpades.png", value: 6 },
    { name: 'ten', imgSrc: "assets/cards/tenOfClubs.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfDiamonds.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfHearts.png", value: 10 },
    { name: 'ten', imgSrc: "assets/cards/tenOfSpades.png", value: 10 },
    { name: 'three', imgSrc: "assets/cards/threeOfClubs.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfDiamonds.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfHearts.png", value: 3 },
    { name: 'three', imgSrc: "assets/cards/threeOfSpades.png", value: 3 },
    { name: 'two', imgSrc: "assets/cards/twoOfClubs.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfDiamonds.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfHearts.png", value: 2 },
    { name: 'two', imgSrc: "assets/cards/twoOfSpades.png", value: 2 }
  ]