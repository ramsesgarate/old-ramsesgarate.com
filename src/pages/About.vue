<template>
  <Layout>
    <div class="container">
      <h1>Sobre mi</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: 'Sobre mi - %s'
  }
}
</script>

<style>
.container, .quotations {
    max-width: 800px;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
    overflow-wrap: break-word;
}

@media (min-width: 620px) {
    .container, .quotations {
        padding: 0 2rem;
    }
}
</style>
