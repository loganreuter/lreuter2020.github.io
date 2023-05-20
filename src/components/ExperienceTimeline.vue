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
  props: {
    experience: Object
  },
}
</script>

<style lang="scss" scoped>
    .timeline{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 25rem;
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