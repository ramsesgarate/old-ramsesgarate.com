<template>
  <nav class="post-nav">
    <div class="post-nav__previous" v-if="previousPage">
      <g-link  exact class="post-nav__link" :to="previousPage.link">
        &larr; {{ previousPage.title }}
      </g-link>
    </div>
    <div class="post-nav__next" v-if="nextPage">
      <g-link  exact class="post-nav__link" :to="nextPage.link">
        {{ nextPage.title }} &rarr;
      </g-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    previousPage: {
      type: Object
    },
    nextPage: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.post-nav {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  & .post-nav__previous,
  & .post-nav__next{
      padding: 10px 15px;
      border-radius: 6px;
      &:hover{
          background-color: rgba(0, 4, 255, 0.103);
      } 
  }
  & .post-nav__previous{
    margin-right: auto;
  }
  & .post-nav__next{
    margin-left: auto;
  }
}

</style>