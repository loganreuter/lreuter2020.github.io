<template>
    <div class="body" id="body" ref="body">
        <HomeView/>
        <SectionBreak :color="'rgba(255,255,255,0.1)'" :top="true"/>
        <AboutView/>
        <SectionBreak :color="'rgba(255,255,255,0.1)'" :id="1" :top="false"/>
        <ProjectsView/>
        <ResumeView />
        <SectionBreak :color="'rgba(255,255,255,0.1)'" :top="true"/>
        <ContactMeView />
        <PageFooter/>
    </div>
</template>

<script>
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ProjectsView from './ProjectsView.vue'
import ResumeView from './ResumeView.vue'
import ContactMeView from './ContactMeView.vue'

import SectionBreak from '@/components/SectionBreak.vue'
import PageFooter from '@/components/PageFooter.vue'


export default {
    name: "BodyView",
    components: {
        HomeView,
        AboutView,
        ProjectsView,
        ResumeView,
        ContactMeView,
    
        SectionBreak,
        PageFooter
    },
    data(){
        return {
            observer: "",
            previousFocus: "",
        }
    },
    mounted(){
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    this.$store.commit("updateSection", entry.target.id);
                    this.previousFocus = entry;
                }
                    // this.slide(entry.target);
            })
        }, {
            threshold: 0.5,
        })

        document.querySelectorAll("section").forEach(section => {
            this.observer.observe(section)
        });
    },
    beforeUnmount(){
        this.observer.disconnect();
    },
    methods: {
        slide(e){
            e.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            })
        }
    }
}
</script>

<style lang="scss">
.body{
    height: 100vh;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        display: none;
    }
    scrollbar-width: none;
}
</style>