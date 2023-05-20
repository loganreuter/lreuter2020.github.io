<template>
  <section id="home" class="home">
    <div class="intro">
      <h1>Hi, I'm Logan</h1>
      <h2>{{$store.state.info.subheading}}</h2>
    </div>

    <div class="blob" ref="blob"></div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Scene from "scenejs";

export default {
  name: 'HomeView',
  data() {
    return {
      blobInterval: 0,
      blobTiming: 5000,
    }
  },
  mounted(){
    this.blobInterval = setInterval(() => {
      let target = this.$refs.blob;
      target.style.setProperty("--prev", getComputedStyle(target).getPropertyValue("--blob"));
      target.style.setProperty("--blob", `${this.genBorderRadius()}% ${this.genBorderRadius()}% ${this.genBorderRadius()}% ${this.genBorderRadius()}% / ${this.genBorderRadius()}% ${this.genBorderRadius()}% ${this.genBorderRadius()}% ${this.genBorderRadius()}%`);
    }, this.blobTiming);
  },
  beforeUnmount(){
    clearInterval(this.blobInterval)
  },
  methods: {
    genBorderRadius(){
      return Math.floor(Math.random() * (100 - 30 + 1) + 30)
    }
  }
}
</script>

<style lang="scss" scoped>
  
  @keyframes blob {
    from {
      border-radius: var(--prev);
    }
    to{
      border-radius: var(--blob);
    }
  }

  #home{
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;

    .intro{
      text-align: left;

      h1, h2{
        margin: 0;
      }
      h1{
        font-size: 48px;
      }
      h2{
        opacity: 0.8;
      }
    }
    .blob{
      --prev: 45% 55% 65% 45% / 65% 57% 95% 49%;
      --blob: 65% 57% 95% 49% / 45% 55% 65% 45%;
      content: "";
      aspect-ratio: 1/1;
      width: 30%;

      background-color: rgba(var(--purple), 0.75);
      border-radius: var(--prev);
      animation: blob 5s ease-in-out infinite;
      overflow: hidden;

      // &::after{
      //   content: "";
      //   display: block;
      //   // opacity: 1;
      //   background-image: url("../assets/cover_photo.png");
      //   background-size: cover;
      //   background-repeat: no-repeat;
      //   background-position: center;
      //   // background-position-y: bottom;
      //   width: 100%;
      //   height: 100%;
      // }
    }
  }
</style>
