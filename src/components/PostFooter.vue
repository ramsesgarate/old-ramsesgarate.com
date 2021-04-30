<template>
  <div class="mt-16">
    <div
      class="flex justify-between items-center border-b-2 border-teal-400 pb-4 flex-wrap"
    >
      <link-edit-page :edit-link="editLink" class="mb-4 sm:mb-0" />
      <div class="flex flex-wrap">
        <PostTags
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :tag="tag"
          class="mb-2 sm:mb-0"
        />
      </div>
    </div>
    <post-nav-footer :previous-page="previousPage" :next-page="nextPage" />
  </div>
</template>

<script>
import LinkEditPage from "~/components/LinkEditPage";
import PostNavFooter from "~/components/PostNavFooter";
import PostTags from "~/components/PostTags";

export default {
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
    LinkEditPage,
    PostTags,
    PostNavFooter,
  },
};
</script>