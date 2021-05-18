<template>
  <Section>
    <h2 class="text-3xl mb-4 text-center">
      Mi Stack actual de lenguajes y tecnologías son:
    </h2>
    <div class="flex justify-center mb-16">
      <LazyHydrate when-visible>
        <down-arrow-icon class="mt-4" />
      </LazyHydrate>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-screen-lg"
    >
      <div title="VueJs" class="flex justify-center items-center mb-2">
        <LazyHydrate when-visible>
          <vue-icon />
        </LazyHydrate>
      </div>
      <div title="Webpack" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <webpack-icon />
        </LazyHydrate>
      </div>
      <div title="JavaScript" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <js-icon />
        </LazyHydrate>
      </div>
      <div title="TypeScript" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <typescript-icon />
        </LazyHydrate>
      </div>
      <div title="NodeJs" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <node-js-icon />
        </LazyHydrate>
      </div>
      <div title="HTML" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <html-icon />
        </LazyHydrate>
      </div>
      <div title="CSS" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <css-icon />
        </LazyHydrate>
      </div>
      <div title="SASS" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <sass-icon />
        </LazyHydrate>
      </div>
      <div title="Git" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <git-icon />
        </LazyHydrate>
      </div>
      <div title="MySql" class="flex justify-center items-center">
        <LazyHydrate when-visible>
          <mysql-icon />
        </LazyHydrate>
      </div>
    </div>
  </Section>
</template>

<script>
import LazyHydrate from "vue-lazy-hydration";
import Section from "@/components/Section";

export default {
  components: {
    LazyHydrate,
    Section,
    VueIcon: () => import("@/assets/svg/vue.svg"),
    WebpackIcon: () => import("@/assets/svg/webpack.svg"),
    JsIcon: () => import("@/assets/svg/js.svg"),
    TypescriptIcon: () => import("@/assets/svg/typescript.svg"),
    NodeJsIcon: () => import("@/assets/svg/nodejs.svg"),
    HtmlIcon: () => import("@/assets/svg/html.svg"),
    CssIcon: () => import("@/assets/svg/css.svg"),
    SassIcon: () => import("@/assets/svg/sass.svg"),
    GitIcon: () => import("@/assets/svg/git.svg"),
    MysqlIcon: () => import("@/assets/svg/mysql.svg"),
    DownArrowIcon: () => import("@/assets/svg/down-arrow.svg"),
  },
};
</script>