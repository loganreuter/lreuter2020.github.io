<template>
  <div class="timeline">
    <div class="line">
      <TimelineTile v-for="(job, index) in experience" :key="index" :job="job" />
    </div>
  </div>
</template>

<script>
import TimelineTile from './TimelineTile.vue'

export default {
  name: "ExperienceTimeline",
  components: {
    TimelineTile
  },
  data(){
    return{
      experience: [
        {
          title: "Undergrad Researcher",
          company: "ARMS Lab",
          startDate: "May 2023",
          endDate: "Present"
        },
        {
          title: "Robotic Intern",
          company: "CSTEM Lab",
          startDate: "June, 2019",
          endDate: "August 2021",
        },
        {
          title: "Engineering Intern",
          company: "KVAL inc",
          startDate: "June, 2019",
          endDate: "August 2021",
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
    .timeline{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 40rem;
      position: relative;

      .line{
        content: "";
        width: 4px;
        height: 100%;
        background: linear-gradient(rgba(var(--white), 1) 85%, rgba(var(--white), 0));
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        gap: 4rem;
      }
    }
</style>