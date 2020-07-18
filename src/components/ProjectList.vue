<template>
  <div class="row">
    <div class="col col-1-of-3" v-for="project in projects" :key="project.id">
      <Card 
        :title="project.title" 
        :paragraph="project.description"
        class="blue-gradient"
        :to="project.link"
        />
    </div>
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  props: {
    projects: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/base/grid.scss';

.blue-gradient {
    background: rgb(18,83,241);
    background: linear-gradient(142deg, rgba(18,83,241,1) 10%, rgba(0,147,255,1) 100%);
    color: #fff;
}

</style>
