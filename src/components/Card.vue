<template>
  <div class="card" v-on:click="reveal">
    <span v-show="isVisible" class="front">{{ card.symbol }}</span>
    <span v-show="!isVisible" class="back">?</span>
  </div>
</template>

<script>
export default {
  props: ['symbol', 'onClick', 'card', 'index'],
  data() {
    return {
      isVisible: false,
      isMatched: false
      // symbol: ''
      // index: 0
    };
  },
  methods: {
    reveal() {
      this.flip();
      this.$emit('reveal', this.index);
    },
    flip() {
      this.isVisible = !this.isVisible;
      console.log('card hey', this.index);
    },
    test2() {
      this.isVisible = !this.isVisible;
      console.log(this.isVisible);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.card {
  height: 1.1em;
  width: 1.1em;
  font-size: 10em;
  line-height: 1em;
  text-align: center;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: green;
  display: inline-block;

  .front {
    background-color: white;
  }

  .back {

  }
}
</style>
