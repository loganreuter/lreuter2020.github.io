<template>
<div class="path-wrapper" ref="wrapper" :class="orientation">
  <svg class="svg">
    <clipPath id="path" clipPathUnits="objectBoundingBox"><path :d="selectedPath"></path></clipPath>
  </svg>
</div>
</template>

<script>
export default {
  name: "SectionBreak",
  props: {
    color: String,
    id: Number,
    top: Boolean
  },
  data(){
    return{
      orientation: "top",
      selectedPath: "m0,0.5 q0.25,1,0.5,0 q0.25,-1,0.5,0 l0,0.5 l-1,0",
      paths: [
        "m0,0.5 q0.25,1,0.5,0 q0.25,-1,0.5,0 l0,0.5 l-1,0",
        "m0,0.25 q0.25,0.5,0.417,0.25 q0.333,-1,0.583,0 l0,0.5 l-1,0"
      ],
    }
  },
  created(){
    this.selectedPath = this.paths[this.$props.id] ?? this.selectedPath;
    this.orientation = this.top ? "top" : "bottom"
  },
  mounted(){
      this.$refs.wrapper.style.setProperty("--color", this.$props.color ?? "rgba(255,255,255,0)")
  }
}
</script>

<style lang="scss" scoped>
.path-wrapper{
  --color: rgba(255,255,255,0);
  width: 100%;
  height: 4rem;
  // background-color: var(--color);
  isolation: isolate;

  &::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    clip-path: url(#path);
    background-color: var(--color);
  }
  &.bottom::before{
    transform: rotate(180deg);
  }


  .svg{
    position: absolute;
    width: 0;
    height: 0;
  }
}
</style>