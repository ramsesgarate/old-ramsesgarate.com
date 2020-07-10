<template>
  <nav class="post-nav">
    <div class="post-nav__previous">
      <g-link v-if="previousPage" exact class="post-nav__link" :to="previousPage.link">
        &larr; {{ previousPage.title }}
      </g-link>
    </div>
    <div class="post-nav__next">
      <g-link v-if="nextPage" exact class="post-nav__link" :to="nextPage.link">
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

<style>

</style>