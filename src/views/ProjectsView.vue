<template>
  <section id="projects" class="projects" ref="projects">
    <div class="wrapper">
        <ProjectPage v-for="(project, index) in projects" :key="index" :project="project" :id="index" :class="{shown: index == position}"/>
    </div>
    <ProjectSlider :numOfProjects="5" @newPos="update" />
  </section>
</template>

<script>
import ProjectPage from '@/components/ProjectPage.vue'
import ProjectSlider from '@/components/ProjectSlider.vue'

export default {
    name: "ProjectsView",
    components: {
        ProjectPage,
        ProjectSlider
    },
    data(){
        return{
            position: 0,
            projects: [
                1,2,3,4,5
            ]
        }
    },
    methods: {
        update(newPos){
            this.position = newPos;
            document.getElementById(newPos).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }
}
</script>

<style lang="scss" scoped>
    #projects{
        position: relative;
        z-index: 0;
        
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-top: 3.25rem;
        padding-bottom: 0;

        .wrapper{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
</style>