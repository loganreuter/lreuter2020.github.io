<template>
  <div class="timeline-tile">
    <div class="tile-info" :class="side">
        <h1>{{job.title}}</h1>
        <h2>{{job.company}}</h2>
        <h3>{{job.startDate}} - {{job.endDate}}</h3>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
    name: "TimelineTile",
    props: {
        job: Object,
    },
    data(){
        return {
            side: ""
        }
    },
    created(){
        this.side = (getCurrentInstance().vnode.key % 2) ? "right" : "left";
        console.log(this.side)
    }
}
</script>

<style lang="scss" scoped>
    .timeline-tile{
        position: relative;
        background-color: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 10rem;

        .tile-info{
            display: flex;
            flex-flow: column nowrap;
            gap: 0.5rem;

            font-size: 16px;
            position: absolute;
            text-align: left;
            width: fit-content;

            h1, h2, h3{
                white-space: nowrap;
                margin: 0;
            }
            
            h1{
                font-size: 1em;
            }
            h2{
                font-size: 0.9em;
                font-weight: 400;
            }
            h3{
                font-size: 0.65em;
                font-weight: 300;
            }
            
            &.left{
                right: 3rem;
            }
            &.right{
                left: 3rem;
            }
        }
    }
</style>