export default class Card {
  constructor(symbol, id) {
    this.id = id;
    this.symbol = symbol;
    this.isMatched = false;
    this.isVisible = false;
  }

  flip() {
    this.isVisible = !this.isVisible;
  }
}
