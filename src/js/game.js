import Card from './card';
import {shuffle} from './utils';
import symbols from './symbols';

const SECONDS = 1000;

export default class Game {
  constructor() {
    this.cards = createCards();
  }

  get isVisible() {
    return this.cards.filter(c => c.isVisible && !c.isMatched);
  }

  isWon() {
    return this.cards.every(card => card.isMatched);
  }

  flip(i) {
    console.log('flipping', i);
    const card = this.cards[i];
    card.isVisible = !card.isVisible;
    this.update();
  }

  update() {
    const [cardA, cardB] = this.isVisible;
    if (!cardB) { return; }

    if (cardA.symbol === cardB.symbol) {
      handleMatched(cardA, cardB);
    } else {
      handleUnmatched(cardA, cardB);
    }
  }
}

function handleMatched(cardA, cardB) {
  setTimeout(() => {
    cardA.isMatched = true;
    cardB.isMatched = true;
  }, 0.5 * SECONDS);
}

function handleUnmatched(cardA, cardB) {
  setTimeout(() => {
    cardA.flip();
    cardB.flip();
  }, 1 * SECONDS);
}

function createCards() {
  const cards = symbols.reduce((cards, img) =>
    cards.concat([new Card(img), new Card(img)])
  , []);
  return shuffle(cards);
}
