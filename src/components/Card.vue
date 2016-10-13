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
$card-size: 200px;
$font-size: 170px;

.card {
  box-sizing: border-box;
  height: $card-size;
  width: $card-size;
  font-size: $font-size;
  line-height: $card-size;
  border: 5px solid #333;
  border-radius: 5px;
  background-color: green;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 15px;

  &.visible {
    background-color: white;
    border: 1px solid #333;
    cursor: default;
  }

  &.matched {
    color: #777;
    cursor: default;
  }
}
</style>
