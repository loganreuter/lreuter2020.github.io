<template>
  <section id="resume" class="resume">
    <div class="header">
        <h1>Resume</h1>
        <button>
            Resume
        </button>
    </div>
    <ExperienceTimeline/>
  </section>
</template>

<script>
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'

export default {
    name: "ResumeView",
    components: {
      ExperienceTimeline
    }
}
</script>

<style lang="scss" scoped>
  #resume{
    height: 100%;
    padding: 3.5rem 1rem;
    box-sizing: border-box;
  }
</style>