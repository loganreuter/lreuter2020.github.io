<template>
  <div class="project-page">
    <div class="header">
        <div class="title">
            <h1>Title {{project}}</h1>
        </div>
        <div class="subheading">
            <h2>
                Projects
            </h2>
        </div>
    </div>

    <ProjectTile />
  </div>
</template>

<script>
import ProjectTile from './ProjectTile.vue'

export default {
    name: "ProjectPage",
    props: {
        project: Object
    },
    components: {
        ProjectTile
    },

}
</script>

<style lang="scss" scoped>
.project-page{
    display: flex;
    flex-flow: column nowrap;
    // position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // transition: transform 1s ease-in-out;

    .header{
        width: 100%;
        position: relative;
        
        .title{
            min-width: 15rem;
            width: 40%;
            height: fit-content;
            isolation: isolate;
            position: relative;
            padding: 0.5rem 3.5rem 0.5rem 0.5rem;
            text-align: right;
            box-sizing: border-box;

            h1{
                margin: 0;
                font-size: 48px;
            }

            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: -2.125rem;
                z-index: -1;

                width: 100%;
                height: 100%;
                display: block;
                transform: skewX(-15deg);
                background-color: rgba(var(--light-purple), 1);

            }
        }
        .subheading{
            min-width: 10rem;
            width: 30%;
            height: fit-content;
            isolation: isolate;
            position: relative;
            padding: 0.5rem 3.5rem 0.5rem 0.5rem;
            text-align: right;
            box-sizing: border-box;

            h2{
                margin: 0;
            }

            &::before{
                content: "";
                position: absolute;
                top: 0;
                left: -2.125rem;
                z-index: -1;

                width: 100%;
                height: 100%;
                display: block;
                transform: skewX(-15deg);
                background-color: rgba(var(--light-purple), 0.5);
            }
        }
    }

    &:not(.shown){
        transition: transform 500ms 500ms ease-in-out;
    }
}
</style>