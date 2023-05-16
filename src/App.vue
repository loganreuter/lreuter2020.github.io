<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
// @ is an alias to /src

export default {
  name: "app",
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Mono&display=swap');

:root{
 --background-color: 2, 7, 50;
 --purple: 58, 16, 120;
 --light-purple: 92, 70, 156;
 --white: 255, 255, 255;
 --text-color: #fff;
}

// *{
//   border: 1px dashed red;
//   box-sizing: border-box;
// }

html{
  height: -webkit-fill-available;
}
body{
  width: 100%;
  height: 100%;
  min-height: -webkit-fill-available;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


#app {
  $background: url("./assets/background.png");
  $opacity: 0.1;

  font-family: 'Rubik', sans-serif;
  // font-family: 'Space Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  
  color: var(--text-color);
  background-color: rgb(var(--background-color));
  height: 100%;
  width: 100%;
  isolation: isolate;

  overflow: hidden;

  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $background;
    background-size: cover;
    background-position: center;
    opacity: $opacity;
    z-index: -1;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
