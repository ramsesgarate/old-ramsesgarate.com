<template>
  <Layout :show-logo="false">
    <div class="container">

      <div class="about-me">
        <div class="information">
          <h1><span>¡Hola,</span> <br>Soy Ramses Garate!</h1>  
          <p>
            Soy un  desarrollador FrontEnd autodidacta de 23 años Venezolano, actualmente vivo en Chile, en este espacio voy a estar creando contenido sobre las distintas tecnologias FrontEnd como HTML, CSS y JavaScript.
          </p> 
          <div class="social-button">
            <gh-btns-follow user="ramsesgarate" show-count></gh-btns-follow>
          </div>
        </div>
        <div class="img-me">
          <g-image src="~/assets/images/CARICATURA-RG.png"></g-image>
        </div>
      </div>

    <!-- List posts -->
      <div class="posts">
        <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
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
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    titleTemplate: '%s - FrontEnd Developer'
  }
}
</script>

<style>
.container {
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;
}


.about-me {
  display: flex;
}

.information {
  flex: 1 1 50%;
}
.information h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: -.03rem;
  font-weight: 700;
}

.information h1 span{
  font-size: 3rem;
}

.information p {
  font-size: 1.2rem;
  text-align: justify;
  margin: 0 0 2rem;
}

.information .social-button {
  display: flex;
  align-items: center;
}

.information .social-button a:not(.button) {
  color: #000;
  padding: 3px 10px;
}

.img-me {
  flex: 1 1 40%;
}

</style>
