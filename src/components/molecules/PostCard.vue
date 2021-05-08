<template>
  <g-link :to="post.path">
    <r-card :title="post.title" with-hover>
      <template #card-image>
        <g-image :src="post.cover_image.src"></g-image>
      </template>
      <template #card-text>
        <div class="three-lines mb-3">
          {{ post.description }}
        </div>
        <meta-date :date="post.date" />
      </template>
      <template #card-actions>
        <meta-tag v-for="tag of post.tags" :key="tag.id" :tag="tag" />
      </template>
    </r-card>
  </g-link>
</template>

<script>
import MetaDate from "~/components/atoms/MetaDate";
import MetaTag from "~/components/molecules/MetaTag";
import RCard from "@/components/atoms/Card";

export default {
  components: {
    MetaDate,
    RCard,
    MetaTag,
  },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style >
.three-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>