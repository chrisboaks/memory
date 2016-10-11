<template>
  <div class="game">
    <card
      v-for="(card, index) in cards"
      v-bind:card="card"
      v-bind:index="index"
      v-on:reveal="handleReveal">
    </card>
  </div>
</template>

<script>
  import Game from '../js/game';
  import Card from './Card';
  const game = new Game();

  export default {
    components: {
      Card
    },
    data() {
      return {
        cards: game.cards
      };
    },
    methods: {
      handleReveal(index) {
        console.log('revealing', index);
      }
    }
  };
</script>
