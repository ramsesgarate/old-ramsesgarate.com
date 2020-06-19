<template>
  <Layout>
    <div class="container">

      <h1>Contacto</h1>

      <p>
        Envíame un correo electrónico a rsgarate@gmail.com si quieres hablar conmigo. Estoy cerca.
        <br>
        Tenga en cuenta: este es mi sitio personal y no hago publicidad, publicaciones patrocinadas, afiliados, etc.
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
