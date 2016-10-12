<template>
  <div class="card-container">
    <div
      class="card"
      v-on:click="touch"
      v-bind:class="{visible: isVisible, matched: isMatched}">
      {{ isVisible ? symbol : '?' }}
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
$card-size: 150px;
$font-size: 140px;

.card-container {
  margin: 10px;
  display: inline-block;
  height: $card-size;
  width: $card-size;

}

.card {
  box-sizing: border-box;
  height: $card-size;
  width: $card-size;
  font-size: 150px;
  line-height: $card-size;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: green;
  overflow: hidden;
  cursor: pointer;

  &.visible {
    background-color: white;
    cursor: default;
  }

  &.matched {
    color: #777;
    cursor: default;
  }
}
</style>
