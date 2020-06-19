<template>
  <Layout>
    <div class="container">

      <h1>Hola soy Ramses Garate!</h1>

      <p>
        Puedes contactarme escribiendo a mi correo rsgarate@gmail.com
      </p>

    </div>    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Full Stack Software Developer'
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
