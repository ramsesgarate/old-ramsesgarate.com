<template>
  <g-link
    class="rounded bg-gray-900 hover:bg-gray-700 transition-colors duration-300 ease-in"
    :to="post.path"
  >
    <img
      class="w-full h-auto rounded-t"
      :src="post.cover_image.src"
      alt="Mountain"
      width="1920"
      height="1080"
    />
    <div class="px-6 pt-4">
      <div class="font-bold text-xl mb-2" v-html="post.title" />
      <p class="text-gray-200 font-normal lineas">
        {{ post.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-4 font-normal">
      <PostDate :date="post.date" />
      <div class="flex flex-wrap">
        <PostTags
          class="mb-2"
          v-for="tag in post.tags"
          :key="tag.id"
          :tag="tag"
        />
      </div>
    </div>
  </g-link>
</template>

<script>
import PostDate from "~/components/PostDate";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostDate,
    PostTags,
  },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style >
.lineas {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>