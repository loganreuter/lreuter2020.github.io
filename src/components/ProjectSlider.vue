<template>
  <div class="slider" ref="slider" data-pos="0">
    <span v-for="(value, index) in numOfProjects" :key="index" class="dot" @click="adjust(index)" :class="{ active: target >= index }"></span>
  </div>
</template>

<script>
export default {
    name: "ProjectSlider",
    props: {
        numOfProjects: Number
    },
    data(){
        return {
            target: 0,
        }
    },
    methods: {
        adjust(i){
            this.target = i;
            this.$refs.slider.style.setProperty("--slider-height", `${100 * ((this.target) / (this.$props.numOfProjects - 1))}%`);
            this.$emit("newPos", i);
        }
    }
}
</script>

<style lang="scss" scoped>
    $lineWidth: 4px;
    $color: rgba(var(--light-purple), 1);
    .slider{
        --slider-height: 0%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: space-between;

        width: $lineWidth;
        height: 80%;
        background-color: #fff;
        isolation: isolate;

        position: absolute;
        top: 0; bottom: 0;
        right: 1rem;
        margin: auto;
        z-index: 0;

        .dot{
            position: relative;
            content: "";
            box-sizing: content-box;
            // display: block;
            width: 1rem;
            height: 1rem;
            background-color: #fff;
            border-radius: 10rem;
            transition: background 250ms linear;

            &.active{
                background-color: $color;
                transition: background 250ms 500ms linear;
            }
            &:first-of-type{
                top: -0.125rem;
            }
            &:last-of-type{
                bottom: -0.125rem;
            }
            &:hover{
                cursor: pointer;
                filter: brightness(0.75);
            }

        }

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            display: block;
            width: 100%;
            height: var(--slider-height);
            background-color: $color;
            transition: height 500ms linear;
            // box-sizing: border-box;
        }
    }
</style>