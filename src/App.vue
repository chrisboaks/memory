<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png"> -->
    <game></game>
  </div>
</template>

<script>
import Game from './components/Game';

export default {
  components: {
    Game
  }
};
</script>

<style lang="scss">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: forestgreen;
}

#app {
  color: #222;
  width: 100%;
  margin: 0 auto;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
