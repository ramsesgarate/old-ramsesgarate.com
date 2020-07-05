<template>
  <Layout :show-logo="false">
    <section class="author">
      <div class="author info">
        <h1>	&lt;hola-mundo/&gt;</h1>
        <p>Soy un desarrollador FrontEnd autodidacta de 23 años Venezolano, actualmente vivo en Chile, en este espacio voy a estar creando contenido sobre las distintas tecnologias FrontEnd como HTML, CSS y JavaScript.</p>
      </div>
        <g-image src="~/assets/images/caricatura-rg-350x350.png" alt="Caricature Ramses"></g-image>
    </section>

    <section>
      <h2>
        Ultimos articulos
      </h2>        
      <PostList :posts="$page.posts.edges"/>
    </section>

    <section>
      <h2>
        Mas populares
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
