<template>
  <section id="projects" class="projects" ref="projects">
    <div class="wrapper">
        <ProjectPage v-for="(project, index) in projects" :key="index" :project="project" :id="index" :class="{shown: index == position}"/>
    </div>
    <ProjectSlider :numOfProjects="projects.length" @newPos="update" :position="position" />
    <div class="next-section-btn" @click="scrollToResume">
        Next Project 
        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
    </div>
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
            projects: []
        }
    },
    created(){
        this.projects = this.$store.state.info.projects;
    },
    methods: {
        update(newPos){
            this.position = newPos;
            document.getElementById(newPos).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        },
        scrollToResume(){
            if(this.position < (this.projects.length - 1)){
                this.position++;
                this.update(this.position);
            }
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

        .next-section-btn{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            align-items: center;
            gap: 0.5rem;

            position: absolute;
            right: 1rem;
            bottom: 1.5rem;

            svg{
                width: 1.5rem;
                height: 1.5rem;
                fill: rgba(var(--white), 1);
            }

            &:hover{
                cursor: pointer;
                filter: brightness(0.8);
            }
        }
    }
</style>