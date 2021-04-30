<template>
  <div class="">
    <div class="post__content" v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
    coverImage: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/style/prism.scss";
@import "~prismjs/plugins/line-numbers/prism-line-numbers.css";

.post__content {
  ::selection {
    @apply bg-teal-400 bg-opacity-30;
  }

  h1,
  h2,
  h3 {
    a {
      @apply float-left text-teal-400 -ml-8 text-center opacity-0 no-underline transition-opacity duration-200 ease-in;

      &::before {
        content: " ";

        @apply absolute top-0 h-full;
      }

      &::after {
        @apply hidden;
      }
    }

    &:hover a {
      @apply opacity-100;
    }
  }

  h1 {
    @apply text-5xl font-semibold mb-6;
  }

  h2 {
    @apply text-4xl font-semibold mb-5;
  }

  h3 {
    @apply text-3xl font-semibold mb-4;
  }

  h4 {
    @apply text-2xl font-semibold mb-3;
  }

  h5 {
    @apply text-xl font-semibold mb-2;
  }

  p {
    @apply text-lg font-normal mb-5 leading-relaxed;
  }

  ul {
    @apply list-disc pl-10 mb-7;
  }

  ol {
    @apply list-decimal pl-10 mb-7;
  }

  a {
    @apply text-teal-400 hover:border-teal-400 border-b-2 border-transparent transition-colors duration-300 ease-in;
  }

  blockquote {
    @apply border-l-2 border-teal-400 pl-4 italic  bg-teal-400 bg-opacity-10 rounded-r;
  }

  img {
    @apply rounded;
  }
}
</style>