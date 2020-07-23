<template>
  <Layout>
    <section class="author">
      <h1>	&lt;hola-mundo/&gt;</h1>
      <p>Hola, soy Ramses Garate, un desarrollador Front-end autodidacta de 23 años, decidí crear mi propia página web para compartir lo que he aprendido, lo que estoy aprendiendo, consejos, mejores prácticas sobre desarrollo web, etc...</p>
      <p>Mi objetivo es hacer un espacio en la web sin los molestos anuncios, publicaciones patrocinadas, ventanas emergentes de noticias y todo ese ruido molesto que estamos acostumbrados a ver en internet hoy en día.</p>
      <p>Puedes leer todas mis publicaciones en mi <g-link to="/blog/">Blog</g-link>,  si te quieres poner en contacto conmigo, no dudes en escribirme a rsgarate@gmail.com.</p>
    </section>

    <Section title="Últimos artículos" icon="icons/icons8-editar-archivo-100.png">
      <post-list :posts="$page.posts.edges"/>
    </Section>
    
    <Section title="Más Populares" icon="icons/icons8-producto-caliente.-100.png">
      <post-list :posts="$page.posts.edges"/>
    </Section>

    <Section title="Proyectos" icon="icons/icons8-proyecto-100.png">
      <project-list :projects="projects"/>
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
export default {
  components: {
    'Layout': () => import('~/layouts/Default.vue'),
    'post-list': () => import('~/components/PostList'),
    'project-list': () => import('~/components/ProjectList'),
    'Section': () => import('~/components/Section'),
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
</style>
