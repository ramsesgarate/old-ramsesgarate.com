<template>
  <Layout>
    <section class="bg-gray-900 pb-24">
      <div class="container max-w-screen-lg mx-auto pt-16">
        <h1 class="text-5xl font-medium tracking-normal leading-tight mb-4">
          Blog
        </h1>
        <h2 class="text-2xl tracking-normal italic text-gray-400">
          Publicaciones, tutoriales, fragmentos, reflexiones, notas y todo lo
          demás. <br />
          Aqui encontraras todo lo que he escrito.
        </h2>
      </div>
    </section>

    <section class="container mx-auto max-w-screen-lg">
      <div class="mx-auto max-w-lg -mt-8 mb-8">
        <text-field
          label="Buscar publicación"
          v-model="search"
          prepend-icon="search"
          clearable
        >
        </text-field>
      </div>
      <div class="flex justify-center mb-16 flex-wrap">
        <PostTags
          v-for="(tag, index) in allTags"
          :key="index"
          :tag="tag.node"
          class="mb-2"
        />
      </div>
      <div v-if="allPost.length">
        <PostList :posts="allPost" />
      </div>
      <div v-else class="container max-w-screen-lg mx-auto">
        <p class="text-xl tracking-normal italic text-gray-400">
          Lo siento, no hay resultados para
          <span class="text-teal-400">
            {{ search }}
          </span>
        </p>
      </div>
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
        description
        cover_image (blur: 5)
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
  tags: allTag {
    edges {
      node {
        title,
        path
      }
    }
  }
}

</page-query>

<script>
import PostTags from "~/components/PostTags";
import TextField from "~/components/organism/TextField";
import PostList from "~/components/PostList.vue";

export default {
  name: "Blog",
  components: {
    PostList,
    TextField,
    PostTags,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    allPost() {
      return this.$page.posts.edges.filter((post) => {
        return post.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim());
      });
    },
    allTags() {
      return this.$page.tags.edges;
    },
  },
  metaInfo() {
    return {
      title: "Blog",
      description:
        "Publicaciones, tutoriales, fragmentos, reflexiones, notas y todo lo demás. Aqui encontraras todo lo que he escrito.",
    };
  },
};
</script>

<style lang="scss">
.blog p {
  font-size: 1.2rem;
}
</style>
