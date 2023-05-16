<template>
  <section id="about" class="about">
    <div class="about-wrapper">
      <div class="image"></div>
      
      <div class="info">
        <h1>Meet Logan</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat praesentium quidem minus veniam quaerat. Qui nesciunt velit omnis maiores alias voluptatibus officiis id architecto. Consequuntur obcaecati magni fugit rem.
        </p>
        <div class="info-tabs">
          <span class="skills tab" :class="{active: activeTab == 'skills'}" @click="openTab('skills')">
            Skills
            <span class="underline"></span>
          </span>
          <span class="hobbies tab" :class="{active: activeTab == 'hobbies'}" @click="openTab('hobbies')">
            Hobbies
            <span class="underline"></span>
          </span>
          <span class="clubs tab" :class="{active: activeTab == 'clubs'}" @click="openTab('clubs')">
            Clubs
            <span class="underline"></span>
          </span>
        </div>
        <div class="info-text">
          <ul id="skills" class="text" :class="{active: activeTab == 'skills'}">
            <li>skill #1</li>
            <li>skill #2</li>
            <li>skill #3</li>
          </ul>
          <ul id="hobbies" class="text" :class="{active: activeTab == 'hobbies'}">
            <li>hobby #1</li>
            <li>hobby #2</li>
            <li>hobby #3</li>
          </ul>
          <ul id="clubs" class="text" :class="{active: activeTab == 'clubs'}">
            <li>
              Club
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "AboutView",
  data(){
    return{
      activeTab: "skills",
    }
  },
  methods: {
    openTab(t){
      this.activeTab = t
    }
  }
}
</script>

<style lang="scss" scoped>
  #about{
    --highlight-color: var(--light-purple);
    min-height: 100vh;
    background-color: rgba($color: #fff, $alpha: 0.10);
    padding: 2rem 5rem;
    box-sizing: border-box;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .about-wrapper{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-start;
      column-gap: 6rem;
      row-gap: 4rem;
      // height: fit-content;
    }
  }

  .image{
    flex: 1 1 0;
    content: "";
    aspect-ratio: 8/10;
    max-width: 25rem;
    min-width: 12rem;
    background-color: rgba(var(--background-color), 0.5);
    border-radius: 5px;
  }

  .info{
    flex: 1 1 0;

    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    min-width: 20rem;
    max-width: 45rem;
    height: 100%;
    letter-spacing: 0.05rem;

    h1{
      margin: 0;
      font-size: 48px;
    }

    .info-tabs{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      .tab{
        width: fit-content;
        font-size: 18px;
        letter-spacing: 0.05em;

        .underline{
          content: "";
          display: block;
          width: 2rem;
          border: 2px solid rgba(var(--white), 0.5);
        }

        &.active{
          color: rgba(var(--highlight-color), 1);
          .underline{
            border: 2px solid rgba(var(--highlight-color), 1);
          }
        }

        &:hover{
          cursor: pointer;
          color: rgba(var(--highlight-color), 0.75);
          .underline{border: 2px solid rgba(var(--highlight-color), 0.75);}
        }
      }
    }

    .info-text{
      content: "";
      overflow: hidden;
      position: relative;
      flex: 1 0 auto;
      min-height: 10rem;
      
      .text{
        position: absolute;
        display: inline-block;
        width: 100%;
        transform: translateX(0);
        transition: all 1s ease-in-out;
        &:not(.active){
          &#skills{
            transform: translateX(-100%);
          }
          &#clubs{
            transform: translateX(100%);
          }
        }
      }

      #skills.active + #hobbies{
        transform: translateX(100%);
      }
      #hobbies:has(+ #clubs.active){
        transform: translateX(-100%);
      }
    }
  }
</style>