<template>
  <div class="education-tile">
    <h1 class="degree">
        {{education.level}} {{education.degree}}
    </h1>
    <h2 class="school">
        {{education.school}}
    </h2>
    <h3>
       <span v-if="education.obtained">Graduated</span>
       <span v-else>Expected Graduation</span>
       {{education.endDate}} 
    </h3>
  </div>
</template>

<script>
export default {
    name: "EducationTile",
    props: {
        education: Object
    }
}
</script>

<style lang="scss" scoped>
    .education-tile {
        width: 20rem;
        padding: 1rem 1rem;
        box-sizing: border-box;

        background-color: rgba(var(--background-color), 0.5);
        color: rgba(var(--white), 1);
        text-align: left;
        border-radius: 5px;
        // box-shadow: 0 0 5px 3px rgba(var(--purple), 0.75);

        display: flex;
        flex-flow: column nowrap;
        gap: 0.25rem;

        h1, h2, h3{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            gap: 0.5rem;
            margin: 0;
        }
        h1{
            font-size: 20px;
            font-weight: bold;
        }
        h2{
            font-size: 18px;
            font-weight: 500;
        }
        h3{
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>