import Card from './card';
import {shuffle} from './utils';
import symbols from './symbols';

const SECONDS = 1000;

export default class Game {
  constructor() {
    this.cards = createCards();
    this.isUpdating = false;
  }

  get visibleCards() {
    return this.cards.filter(c => c.isVisible && !c.isMatched);
  }

  isWon() {
    return this.cards.every(card => card.isMatched);
  }

  touchCard(id) {
    if (this.isUpdating) return;

    const card = this.cards.find(c => c.id === id);
    card.flip();
    this.update();
  }

  update() {
    const [cardA, cardB] = this.visibleCards;
    if (!cardB) { return; }

    this.isUpdating = true;
    if (cardA.symbol === cardB.symbol) {
      handleMatched(cardA, cardB, this);
    } else {
      handleUnmatched(cardA, cardB, this);
    }
  }
}

function handleMatched(cardA, cardB, game) {
  setTimeout(() => {
    cardA.isMatched = true;
    cardB.isMatched = true;
    game.isUpdating = false;
  }, 0.5 * SECONDS);
}

function handleUnmatched(cardA, cardB, game) {
  setTimeout(() => {
    cardA.flip();
    cardB.flip();
    game.isUpdating = false;
  }, 1 * SECONDS);
}

function createCards() {
  const cards = symbols.reduce((cards, img, i) =>
    cards.concat([new Card(img, 2 * i), new Card(img, 2 * i + 1)])
  , []);
  return shuffle(cards);
}
