<template>
  <Layout>
    <section class="author">
      <h1>	&lt;hola-mundo/&gt;</h1>
      <p>Hola, soy Ramses Garate, un desarrollador Front-end autodidacta de 23 años, decidí crear mi propia página web para compartir lo que he aprendido, lo que estoy aprendiendo, consejos, mejores prácticas sobre desarrollo web, etc...</p>
      <p>Mi objetivo es hacer un espacio en la web sin los molestos anuncios, publicaciones patrocinadas, ventanas emergentes de noticias y todo ese ruido molesto que estamos acostumbrados a ver en internet hoy en día.</p>
      <p>Puedes leer todas mis publicaciones en mi <g-link to="/blog/">Blog</g-link>,  si te quieres poner en contacto conmigo, no dudes en escribirme a rsgarate@gmail.com.</p>
    </section>

    <section>
      <div class="section__title">
        <h2>
          Últimos artículos
        </h2> 
      </div>
      <PostList :posts="$page.posts.edges"/>
    </section>

    <section>
      <div class="section__title">
        <h2>
          Más populares
        </h2> 
      </div>
      <PostList :posts="$page.posts.edges"/>
    </section>

    <section>
      <div class="section__title">
        <h2>
          Proyectos
        </h2> 
      </div>
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
import Layout from '~/layouts/Default.vue'
import Section from '~/components/Section'
import PostList from '~/components/PostList'
import ProjectList from '~/components/ProjectList'

export default {
  components: {
    Layout,
    PostList,
    ProjectList,
    Section
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
        },
      ]
    }
  }
}
</script>

<style lang="scss">
section.author p:first-of-type{
    font-size: 1.15rem;
}

@media screen and (min-width: 750px) {
    section.author p:first-of-type{
        font-size: 1.25rem;
    }
}

.section__title {
    display: flex;
    align-items: center;

    & img {
        width: 50px;
        height: 50px;
        margin-right: 12px;
    }
} 
</style>
