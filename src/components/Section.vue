<template>
  <section :class="className">
    <h2>
      {{this.title}}
    </h2> 
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