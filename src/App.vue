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
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  // height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 1000px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
