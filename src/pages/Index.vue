<template>
  <Layout>
    <section class="author">
      <div class="author info">
        <h1>	&lt;hola-mundo/&gt;</h1>
        <p>Hola, soy Ramses Garate, un desarrollador Front-end autodidacta de 23 años, decidí crear mi propia página web para colocar las cosas que he aprendido, consejos, mejores prácticas y lo que estoy aprendiendo sobre desarrollo web.</p>
        <p>Mi objetivo es hacer un espacio en la web sin los molestos anuncios, publicaciones patrocinadas, ventanas emergentes de noticias y todo ese ruido molesto que estamos acostumbrados a ver en internet hoy en día.</p>
        <p>Puedes leer todas mis publicaciones en mi <g-link to="/blog/">Blog</g-link>,  si te quieres poner en contacto conmigo, no dudes en escribirme a rsgarate@gmail.com.</p>
      </div>
        <g-image src="~/assets/images/caricatura-rg-350x350.png" alt="Caricature Ramses"></g-image>
    </section>

    <section>
      <h2>
        Últimos artículos
      </h2>        
      <PostList :posts="$page.posts.edges"/>
    </section>

    <section>
      <h2>
        Más populares
      </h2>
      <PostList :posts="$page.posts.edges"/>
    </section>

    <section>
      <h2>
        Proyectos
      </h2>
      <ProjectList :projects="projects"/>
    </section>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY" locale: "es-ES")
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostList from '~/components/PostList.vue'
import ProjectList from '~/components/ProjectList.vue'

export default {
  components: {
    PostList,
    ProjectList
  },
  metaInfo: {
    titleTemplate: '%s - FrontEnd Developer'
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'ramses.dev', 
          description: 'Tema personal de Gridsome (repositorio de esta web).', 
          link: 'https://github.com/ramsesgarate/ramsesgarate.com'
        }
      ]
    }
  }
}
</script>

<style>


</style>
