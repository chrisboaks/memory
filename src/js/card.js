export default class Card {
  constructor(symbol) {
    this.symbol = symbol;
    this.isMatched = false;
    this.isVisible = false;
  }

  flip() {
    this.isVisible = !this.isVisible;
  }
}
