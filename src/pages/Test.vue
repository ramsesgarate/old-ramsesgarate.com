<template>
  <Layout>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    {{ searchResults }}
  </Layout>
</template>

<script>
export default {
  data: () => ({
    searchTerm: ''
  }),
  computed: {
    searchResults () {
      const searchTerm = this.searchTerm
      if (searchTerm.length < 3) return []
      return this.$search.search({ query: searchTerm, limit: 5 })
    },
    test() {
      return this.$search();
    }
  },
  watch: {
    $route (to, from) {
      this.searchTerm = ''
    }
  }
}
</script>