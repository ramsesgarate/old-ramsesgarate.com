<template>
  <div class="side-left">
    <ul>
      <li>
        <a
          :href="config.github"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          :href="config.twitter"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a
          :href="config.linkedin"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          :href="config.instagram"
          aria-label="Instgram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import InstagramIcon from "@/assets/icons/icon-instagram.svg";
import TwitterIcon from "@/assets/icons/icon-twitter.svg";
import LinkedinIcon from "@/assets/icons/icon-linkedin.svg";
import GithubIcon from "@/assets/icons/icon-github.svg";

import config from "@/data/website.json";

export default {
  name: "SideSocialNetworks",
  components: {
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
  },
  data() {
    return {
      config,
    };
  },
};
</script>

<style lang="scss" scoped>
.side-left {
  @apply hidden md:block fixed w-10 z-10  text-gray-300 bottom-0 right-auto left-8 lg:left-10;

  ul {
    @apply flex flex-col items-center m-0 p-0;

    &::after {
      @apply block h-24 mx-auto my-0 bg-gray-300;

      content: "";
      width: 1px;
    }

    li {
      a {
        padding: 10px;

        @apply inline-block align-middle no-underline relative transform transition-all ease-in duration-300 mb-1;

        &:hover {
          @apply text-teal-400 -translate-y-1;
        }

        svg {
          @apply h-5 w-5 align-middle max-w-full;
        }
      }

      &:last-of-type {
        @apply mb-5;
      }
    }
  }
}
</style>