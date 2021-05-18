<template>
  <Layout>
    <section class="bg-gray-900">
      <div class="container max-w-screen-lg mx-auto pt-16 md:px-20 lg:px-10">
        <h1 class="text-5xl font-medium tracking-normal leading-tight mb-4">
          Tag: {{ $page.tag.title }}
        </h1>
        <p class="text-2xl tracking-normal italic text-gray-400">
          <span class="text-teal-400">{{
            $page.tag.belongsTo.totalCount
          }}</span>
          post encontrados
        </p>
      </div>
    </section>
    <wave />

    <section class="container mx-auto max-w-screen-lg md:px-20 lg:px-10">
      <PostList :posts="$page.tag.belongsTo.edges" />
    </section>
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      totalCount
      edges {
        node {
          ... on Post {
            id
            title
            cover_image(blur: 5)
            date(format: "D. MMMM YYYY", locale: "es-ES")
            path
            description
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}

</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import PostList from "~/components/PostList.vue";
import Wave from "~/assets/svg/wave-header.svg";

export default {
  components: {
    Layout,
    PostList,
    Wave,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style lang="scss">
.tag p {
  font-size: 1.2rem;

  & span {
    color: #275efe;
  }
}
</style>

