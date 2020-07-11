<template>
  <Layout>
    <section class="author">
      <div class="author info">
        <h1>	&lt;hola-mundo/&gt;</h1>
        <p>Hola, soy Ramses Garate, un desarrollador Front-end autodidacta de 23 años, decidí crear mi propia página web para compartir mis conocimiento, lo que estoy aprendiendo, consejos y mejores prácticas sobre desarrollo web.</p>
        <p>Mi objetivo es hacer un espacio en la web sin los molestos anuncios, publicaciones patrocinadas, ventanas emergentes de noticias y todo ese ruido molesto que estamos acostumbrados a ver en internet hoy en día.</p>
        <p>Puedes leer todas mis publicaciones en mi <g-link to="/blog/">Blog</g-link>,  si te quieres poner en contacto conmigo, no dudes en escribirme a rsgarate@gmail.com.</p>
      </div>
    </section>

    <Section title="Últimos artículos">
      <PostList :posts="$page.posts.edges"/>
    </Section>
    
    <Section title="Más Populares">
      <PostList :posts="$page.posts.edges"/>
    </Section>

    <Section title="Proyectos">
      <ProjectList :projects="projects"/>
    </Section>

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
import Section from '~/components/Section'
import PostList from '~/components/PostList'
import ProjectList from '~/components/ProjectList'

export default {
  components: {
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
        }
      ]
    }
  }
}
</script>

<style>


</style>
