<template>
  <div
    class="card-container"
    v-bind:class="{visible: isVisible}">

    <div
      class="card"
      v-on:click="touch"
      v-bind:class="{matched: isMatched}">
      <div class="front">
        {{ symbol }}
      </div>
      <div class="back">
        ?
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['id', 'isVisible', 'isMatched', 'symbol'],
  methods: {
    touch() {
      this.$emit('touch', this.id);
    }
  }
};
</script>


<style lang="scss">
$card-size: 200px;
$font-size: 170px;

.card-container {
  perspective: 1000px;
  margin: 15px;

  &.visible .card {
    transform: rotateY(180deg);
  }
}

.card-container, .front, .back {
  width: $card-size;
  height: $card-size;
  font-size: $font-size;
}

.card {
  box-sizing: border-box;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  line-height: $card-size;
  &.matched {
    color: #777;
  }
}

.front, .back {
  border-radius: 10px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform: rotateY(180deg);
  cursor: default;
  left: -9px;
  border: 5px solid #666;
  background-color: white;
}

.back {
  background-color: dodgerblue;
  transform: rotateY(0deg);
  cursor: pointer;
  border: 5px solid #333;
}
</style>
