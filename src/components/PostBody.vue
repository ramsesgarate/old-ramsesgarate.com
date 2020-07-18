<template>
  <div class="post-body">
    <div class="post__content" v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String
    },
    coverImage: {
      type: String
    }
  }

}
</script>

<style lang="scss">
@import '~/assets/style/prism.scss';
@import '~/assets/style/base/variables.scss';

.post-body {
    & h2 a,
    & h3 a,
    & h4 a,
    & h5 a {
        color: $heading-color;
    }

    & ul,
    & ol {
        padding: 0;
        margin: 0 0 1.55rem 1.2rem;
        list-style-position: outside;
        list-style-image: none;
    }

    & img {
        max-width: 100%;
        display: block;
        height: auto;
        margin: 0 auto;
    }

    & blockquote {
        margin: 1.5rem 0;
        padding: 1rem;
        background: rgba(0, 4, 255, 0.103);
        border-radius: .3rem;
        border: solid $primary;
        border-width: 0 0 0 8px;

        & p {
          margin: 0;
        }

    }
}

</style>