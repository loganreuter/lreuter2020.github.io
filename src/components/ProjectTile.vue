<template>
  <div class="project-wrapper">
    <div class="cover" :class="{open: open}" @click="openProject">
        Photo Here
    </div>
    <div class="project" :class="{open: open}">
        <div class="header">
            <span class="close-wrapper" @click="closeProject">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
            </span>
        </div>
        <div class="hidden project-header">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque mollitia voluptate praesentium. Aliquid iusto quo ad magnam placeat reiciendis, nisi pariatur odit ipsum officiis optio cum nesciunt officia delectus cupiditate?
        </div>
        <div class="hidden gallery">
            <img src="../assets/logo.png" alt="vue">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProjectTile",
    data(){
        return{
            open: false
        }
    },
    methods: {
        openProject(){
            this.open = true;
            this.$store.commit('updateProjectOpen', true);
        },
        closeProject(){
            this.open = false;
            this.$store.commit('updateProjectOpen', false);
        }
    }
}
</script>

<style lang="scss" scoped>
    .project-wrapper{
        flex: 1 1 0;
        min-width: 100%;

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        // position: relative;

        .cover{
            aspect-ratio: 16/9;
            min-width: 20rem;
            width: 50%;
            // max-height: 30rem;
            background-color: rgba(var(--purple), 0.2);
            border-radius: 5px;
            opacity: 1;
            transition: all 500ms ease-in-out;
            
            &.open{
                opacity: 0;
            }
            &:not(.open):hover{
                cursor: pointer;
                transform: scale(1.05);
                box-shadow: 5px 5px 0px 0px rgba(var(--background-color), 0.2);
            }
        }
    }

    .project{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;

        width: 100%;
        height: 100%;
        transition: all 500ms ease-in-out;
        transform: translateY(100%);
        background-color: rgba(var(--background-color), 0.8);
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 2rem;

        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;

        .header{
            width: 100%;

            .close-wrapper{
                display: block;
                width: 3rem;
                height: 3rem;
                padding: 0.5rem;
                box-sizing: border-box;
                background-color: rgba(var(--light-purple), 0.8);
                border-radius: 10rem;
                margin-left: auto;

                svg{
                    fill: rgba(var(--background-color), 1);
                }

                &:hover{
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }

        &.open{   
            transform: translateY(0);
        }
    }
</style>