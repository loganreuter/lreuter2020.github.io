<template>
  <footer id="pageFooter">
    © by Logan Reuter 2023
  </footer>
</template>

<script>
export default {
    name: "PageFooter"
}
</script>

<style lang="scss" scoped>
    #pageFooter{
        font-size: 14px;
        color: rgba(var(--white), 0.8);
        background-color: rgba(var(--background-color), 1);
        padding: 1rem;
    }
</style>