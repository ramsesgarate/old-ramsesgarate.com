<template>
  <section :class="className">
    <div class="section__title">
      <g-image 
        v-if="icon" 
        class="img-icon" 
        :src="icon" 
        width="50" 
        height="50" 
        alt="Icon Section"></g-image>
      <h2>
        {{this.title}}
      </h2> 
    </div>
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    className: {
      type: String
    },
    title: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style>

.section__title {
  display: flex;
  align-items: center;
}
.img-icon {
  width: 50px;
  height: 50px;
  margin-right: 12px;
}

</style>