<template>
  <Layout>
    <HomeWelcome />
    <wave />
    <HomeStack />
    <div class="border-b-2 border-gray-900 max-w-5xl mx-auto"></div>

    <Section class="mt-16">
      <template #title class="flex justify-between">
        Últimos artículos
        <g-link
          class="text-lg bg-teal-400 text-gray-800 hover:bg-teal-300 transition-colors duration-300 ease-in rounded px-1"
          to="/blog/"
        >
          Ver todos</g-link
        >
      </template>
      <PostList :posts="$page.posts.edges" />
    </Section>

    <div class="border-b-2 border-gray-900 max-w-5xl mx-auto"></div>

    <Section title="Proyectos" class="mt-16">
      <ProjectList :projects="projects" />
    </Section>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(limit: 6, filter: { published: { eq: true }}) {
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
}
</page-query>

<script>
import Wave from "~/assets/svg/wave-header.svg";
import HomeWelcome from "~/components/Welcome";
import HomeStack from "~/components/Stack";
import Section from "~/components/Section";
import PostList from "~/components/PostList";
import ProjectList from "~/components/ProjectList";

export default {
  components: {
    HomeStack,
    Wave,
    HomeWelcome,
    Section,
    PostList,
    ProjectList,
  },
  metaInfo: {
    titleTemplate: "%s - FrontEnd Developer",
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "ramsesgarate.com",
          subtitle: "Pagina Web",
          description: "Tema personal de Gridsome (repositorio de esta web).",
          link: "https://github.com/ramsesgarate/ramsesgarate.com",
        },
      ],
    };
  },
};
</script>
