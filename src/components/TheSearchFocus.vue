<template>
  <div><h1>Prueba</h1></div>
</template>

<script>
export default {
  name: "FocusSearch",
  mounted() {
    window.addEventListener("keyup", this.handler);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.handler);
  },
  methods: {
    handler(evt) {
      debugger;
      this.$emit("keyup", evt);
    },
  },
};
</script>
