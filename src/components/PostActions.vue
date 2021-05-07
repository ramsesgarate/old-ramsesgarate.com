<template>
  <div class="post-actions">
    <button class="opacity-0 mb-2" @click="onClickShare" ref="buttonShare">
      <share-icon class="h-6 w-6" />
    </button>
    <button class="opacity-0" v-scroll-to="'#title'" ref="buttonTop">
      <up-icon class="h-6 w-6" />
    </button>
  </div>
</template>

<script>
//Assets
import ShareIcon from "@/assets/icons/icon-share.svg";
import UpIcon from "@/assets/icons/icon-up.svg";

export default {
  name: "PostActions",
  components: {
    UpIcon,
    ShareIcon,
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
  methods: {
    scrollListener() {
      const { buttonShare, buttonTop } = this.$refs;
      let isVisibleTopBtn = window.scrollY > 300;

      if (isVisibleTopBtn) {
        buttonTop.classList.add("opacity-100");
        buttonShare.classList.add("opacity-100");
      } else {
        buttonTop.classList.remove("opacity-100");
        buttonShare.classList.remove("opacity-100");
      }
    },
    onClickShare() {
      this.$emit("click:share");
    },
  },
};
</script>

<style lang="scss" scoped>
.post-actions {
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