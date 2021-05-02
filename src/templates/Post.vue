<template>
  <Layout>
    <section class="relative">
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

      <div class="container max-w-screen-md mx-auto">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
          quality="100"
          class="rounded w-full h-auto"
          width="1920"
          height="1080"
        />
        <post-sidebar :subtitles="subtitles" />
        <post-body :content="$page.post.content" />
        <post-footer
          :edit-link="editLink"
          :tags="$page.post.tags"
          :previous-page="previousPage"
          :next-page="nextPage"
        />
      </div>
      <div class="button-actions">
        <button
          class="opacity-0 mb-2"
          @click.prevent="sharePost"
          ref="buttonShare"
        >
          <share-icon class="h-6 w-6" />
        </button>
        <button class="opacity-0" v-scroll-to="'#title'" ref="buttonTop">
          <up-icon class="h-6 w-6" />
        </button>
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
import PostBody from "~/components/PostBody";
import PostHeader from "~/components/PostHeader";
import PostFooter from "~/components/PostFooter";
import PostSidebar from "~/components/PostSidebar";
import UpIcon from "~/assets/icons/icon-up.svg";
import ShareIcon from "~/assets/icons/icon-share.svg";
import config from "~/data/website.json";
import WavePost from "~/assets/svg/wave-post.svg";

import postLinks from "~/data/post-links.yaml";
import share from "~/mixins/shareAction";

export default {
  name: "Post",
  mixins: [share],
  components: {
    PostBody,
    PostHeader,
    PostFooter,
    PostSidebar,
    UpIcon,
    ShareIcon,
    WavePost,
    ReadProgress: () =>
      import("vue-read-progress")
        .then((m) => m.default)
        .catch(),
  },
  data() {
    return {
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
    postLinks() {
      return postLinks;
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
      return this.postLinks.findIndex((item) => {
        return (
          item.link.replace(/\/$/, "") === this.$route.path.replace(/\/$/, "")
        );
      });
    },
    nextPage() {
      return this.postLinks[this.currentIndex + 1];
    },
    previousPage() {
      return this.postLinks[this.currentIndex - 1];
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
    window.addEventListener("scroll", this.scrollListener);
    if (this.$store.state.isSearchModalOpen) {
      this.$store.dispatch("hideSearchModal");
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    scrollListener() {
      const scrollToTopBtn = this.$refs.buttonTop;
      const buttonShare = this.$refs.buttonShare;
      let isVisibleTopBtn = window.scrollY > 300;

      if (isVisibleTopBtn) {
        scrollToTopBtn.classList.add("opacity-100");
        buttonShare.classList.add("opacity-100");
      } else {
        scrollToTopBtn.classList.remove("opacity-100");
        buttonShare.classList.remove("opacity-100");
      }
    },
    sharePost(e) {
      console.log(this.isWebShareSupported);
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
.button-actions {
  align-items: flex-end;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 24px;
  z-index: 2;

  button {
    @apply rounded-full bg-teal-400 p-2 outline-none transition-opacity duration-200 ease-in focus:outline-none;
  }
}
</style>