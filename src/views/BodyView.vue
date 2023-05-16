<template>
    <div class="body">
        <HomeView/>
        <SectionBreak :color="'rgba(255,255,255,0.1)'" :top="true"/>
        <AboutView/>
        <SectionBreak :color="'rgba(255,255,255,0.1)'" :id="1" :top="false"/>
        <ProjectsView/>
        <ResumeView />
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