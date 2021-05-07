<template>
  <div class="post-footer">
    <div class="post-footer__meta">
      <link-edit-post :edit-link="editLink" />
      <div class="post-footer__tags">
        <meta-tag
          v-for="tag of $page.post.tags"
          :key="tag.id"
          :tag="tag"
          class="post-footer__tag"
        />
      </div>
    </div>
    <post-pagination :previous-page="previousPage" :next-page="nextPage" />
  </div>
</template>

<script>
import LinkEditPost from "~/components/molecules/LinkEditPost";
import PostPagination from "~/components/PostPagination";
import MetaTag from "~/components/molecules/MetaTag";

export default {
  name: "PostFooter",
  props: {
    editLink: {
      type: String,
    },
    tags: {
      type: Array,
    },
    previousPage: {
      type: Object,
    },
    nextPage: {
      type: Object,
    },
  },
  components: {
    LinkEditPost,
    MetaTag,
    PostPagination,
  },
};
</script>

<style lang="scss" scoped>
.post-footer {
  @apply mt-16;

  &__meta {
    @apply flex justify-between items-center border-b-2 border-teal-400 pb-4 flex-wrap;
  }

  &__tags {
    @apply flex flex-wrap;
  }

  &__tag {
    @apply mb-2 sm:mb-0;
  }
}
</style>