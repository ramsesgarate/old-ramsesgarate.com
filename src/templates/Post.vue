<template>
  <Layout>
    <section class="post">
      <ClientOnly>
        <read-progress color="#3EBD93"></read-progress>
      </ClientOnly>

      <post-header
        :title="$page.post.title"
        :date="$page.post.dateFormat"
        :time-to-read="$page.post.timeToRead"
        :cover-image="$page.post.cover_image"
      />
      <wave-post />

      <div class="post-content">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
          quality="100"
          class="post-cover"
        />
        <post-table-content :subtitles="subtitles" />
        <post-body :content="$page.post.content" />
        <post-footer
          :edit-link="editLink"
          :tags="$page.post.tags"
          :previous-page="previousPage"
          :next-page="nextPage"
        />
        <post-actions @click:share="onWebShare" />
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    fileInfo {
      path
    }
    path
    author
    date
    date_update
    dateFormat: date (format: "D. MMMM YYYY" locale: "es-ES")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (blur: 5)
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
//Components
import PostActions from "@/components/PostActions";
import PostBody from "@/components/PostBody";
import PostHeader from "@/components/PostHeader";
import PostFooter from "@/components/PostFooter";
import PostTableContent from "@/components/PostTableContent";

//Assets
import WavePost from "@/assets/svg/wave-post.svg";

//Data
import config from "@/data/website.json";
import postLinks from "@/data/post-links.yaml";

//Mixins
import share from "@/mixins/shareAction";

export default {
  name: "Post",
  mixins: [share],
  components: {
    PostActions,
    PostBody,
    PostHeader,
    PostFooter,
    PostTableContent,
    WavePost,
    ReadProgress: () =>
      import("vue-read-progress")
        .then((m) => m.default)
        .catch(),
  },
  data() {
    return {
      allPostLinks: postLinks,
      isBlogPost: true,
    };
  },
  computed: {
    coverImage() {
      const cover = this.$page.post.cover_image;
      return cover.src
        ? `https://ramsesgarate.com${this.$page.post.cover_image.src}`
        : "";
    },
    shareUrl() {
      return config.siteUrl + this.$page.post.path;
    },
    shareText() {
      const authorText = "por Ramses Garate";
      const title = this.$page.post.title;

      return `${title} ${authorText}`;
    },
    currentIndex() {
      return this.allPostLinks.findIndex((item) => {
        return (
          item.link.replace(/\/$/, "") === this.$route.path.replace(/\/$/, "")
        );
      });
    },
    nextPage() {
      return this.allPostLinks[this.currentIndex + 1];
    },
    previousPage() {
      return this.allPostLinks[this.currentIndex - 1];
    },
    editLink() {
      return `https://github.com/ramsesgarate/ramsesgarate.com/blob/master/${this.$page.post.fileInfo.path}`;
    },
    subtitles() {
      return this.$page.post.subtitles.filter((value) => {
        return [2, 3].includes(value.depth);
      });
    },
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      description: this.$page.post.description,
      keywords: this.$page.post.keywords
        ? this.$page.post.keywords.join(", ")
        : null,
      image: this.coverImage,
      author: this.$page.post.author,
      date: this.$page.post.date,
      dateUpdate: this.$page.post.date_update,
    };
  },
  mounted() {
    if (this.$store.state.isSearchModalOpen) {
      this.$store.dispatch("hideSearchModal");
    }
  },
  methods: {
    sharePost(e) {
      if (this.isWebShareSupported) {
        this.onWebShare(e);
      } else {
        this.onTwitterShare(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &-cover {
    @apply rounded w-full h-auto;
  }

  &-content {
    @apply container max-w-screen-md mx-auto;
  }
}
</style>