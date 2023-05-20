<template>
  <nav class="nav" :class="{hidden: isHidden}">
    <span class="logo nav-link">ЯL</span>
    <span class="nav-link" :class="{active: activeSection == 'home'}" @click="scrollTo('home')">
        Home
    </span>
    <span class="nav-link" :class="{active: activeSection == 'about'}" @click="scrollTo('about')">
        About Me
    </span>
    <span class="nav-link" :class="{active: activeSection == 'projects'}" @click="scrollTo('projects')">
        Projects
    </span>
    <span class="nav-link" :class="{active: activeSection == 'resume'}" @click="scrollTo('resume')">
        Resume
    </span>
    <span class="nav-link" :class="{active: activeSection == 'contact'}" @click="scrollTo('contact')">
        Contact Me
    </span>
  </nav>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return{
            isHidden: false,
            activeSection: "home"
        }
    },
    created(){
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if(mutation.type == 'updateProjectOpen'){
                this.isHidden = state.projectOpen;
            }

            if(mutation.type == 'updateSection'){
                this.activeSection = state.currentSection;
            }
        })
    },
    methods: {
        scrollTo(t){
            // console.log(t);
            // console.log(document.getElementById(t));
            document.getElementById(t).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        width: 100%;
        background-color: rgba(var(--background-color), 0.25);

        padding: 1rem 2rem;
        box-sizing: border-box;

        .nav-link{
            &.logo{
                margin-right:  auto;
            }

            &:not(.logo):hover{
                cursor: pointer;

                &:not(.active){
                    filter: brightness(0.85);
                }
            }
            &.active{
                color: rgba(var(--light-purple), 1);
            }
        }

        &.hidden{
            z-index: 0;
        }
    }
</style>