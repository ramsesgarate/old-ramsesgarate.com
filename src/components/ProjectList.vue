<template>
  <div class="row grid--gutters">
    <div class="col col-1-of-3" v-for="project in projects" :key="project.id">
      <div class="card gradient-blue ">
        <a :href="project.link"  class="project" target="_blank" rel="noopener noreferrer">
          <h3>
            {{project.title}}
          </h3>
          <p>{{project.description}}</p>
        </a>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style lang="scss">
</style>
