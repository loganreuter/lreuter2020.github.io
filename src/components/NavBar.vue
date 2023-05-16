<template>
  <nav class="nav" :class="{hidden: isHidden}">
    <span class="logo nav-link">ЯL</span>
    <span class="nav-link" @click="scrollTo('home')">
        Home
    </span>
    <span class="nav-link" @click="scrollTo('about')">
        About Me
    </span>
    <span class="nav-link" @click="scrollTo('projects')">
        Projects
    </span>
    <span class="nav-link" @click="scrollTo('resume')">
        Resume
    </span>
    <span class="nav-link" @click="scrollTo('contact')">
        Contact Me
    </span>
  </nav>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return{
            isHidden: false
        }
    },
    created(){
        this.unsubscribe = this.$store.subscribe((mutation, state) => {
            if(mutation.type == 'updateProjectOpen'){
                console.log(`new ${state.projectOpen}`);
                this.isHidden = state.projectOpen;
            }
        })
    },
    methods: {
        scrollTo(t){
            console.log(t);
            console.log(document.getElementById(t));
            document.getElementById(t).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
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

            &:not(.logo):not(.active):hover{
                cursor: pointer;
                color: rgba(var(--light-purple), 0.85);
            }
        }

        &.hidden{
            z-index: 0;
        }
    }
</style>