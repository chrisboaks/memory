<template>
  <div class="game">
    <card
      v-for="card in cards"
      v-bind:id="card.id"
      v-bind:isVisible="card.isVisible"
      v-bind:isMatched="card.isMatched"
      v-bind:symbol="card.symbol"
      v-on:touch="handleTouch">
    </card>
  </div>
</template>

<script>
  import Game from '../js/game';
  import Card from './Card';
  const model = new Game();

  export default {
    components: {
      Card
    },
    data() {
      return {
        cards: model.cards
      };
    },
    methods: {
      handleTouch(index) {
        model.touchCard(index);
      }
    }
  };
</script>

<style lang="scss">
.game {
  margin: 0 auto;
  min-width: 800px;
  max-width: 999px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
