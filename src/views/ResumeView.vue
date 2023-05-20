<template>
  <section id="resume" class="resume">
    <div class="header">
        <h1>Resume</h1>
        <a class="download btn" :href="$store.state.info.resumeURL" target="#">
            <span class="text">Download</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>
        </a>
    </div>
    <div class="education-wrapper">
      <h2>Education:</h2>
      <div class="education">
        <EducationTile v-for="(degree, index) in education" :key="index" :education="degree" />
      </div>
    </div>
    <div class="experience-wrapper">
      <h2>Experience:</h2>
      <ExperienceTimeline :experience="experience"/>
    </div>
  </section>
</template>

<script>
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import EducationTile from '@/components/EducationTile.vue'

export default {
    name: "ResumeView",
    components: {
      ExperienceTimeline,
      EducationTile
    },
    data(){
      return{
        education: [],
        experience: []
      }
    },
    created(){
      this.education = this.$store.state.info.education
      this.experience = this.$store.state.info.experience
    }
}
</script>

<style lang="scss" scoped>
  #resume{
    // height: 100%;
    padding: 3.5rem 1rem;
    padding-bottom: 0;
    box-sizing: border-box;
    
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 5rem;

    .header{
      text-align: left;
      justify-self: flex-end;
      
      h1{
        font-size: 48px;
        margin: 0;
      }

      .download{
        display: inline-flex;
        flex-flow: row;
        justify-content: flex-end;
        align-items: flex-end;
        background-color: transparent;
        border: none;
        gap: 0.5em;
        color: rgba(var(--white), 0.9);
        font-weight: 400;
        font-size: 13px;
        padding: 0.1em;
        text-decoration: none;

        .text{
          height: 1em;
          font-size: 1em;
        }

        svg{
          width: 1em;
          height: 1em;
          fill: rgba(var(--white), 0.9);
        }

        &:hover{
          cursor: pointer;
          filter: brightness(0.8);
        }
      }
    }

    .education{
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
</style>