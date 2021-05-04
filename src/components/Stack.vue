<template>
  <Section>
    <h2 class="text-3xl mb-4 text-center">
      Mi Stack actual de lenguajes y tecnologías son:
    </h2>
    <div class="flex justify-center mb-16">
      <down-arrow-icon class="mt-4" />
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-screen-lg"
    >
      <div title="VueJs" class="flex justify-center items-center mb-2">
        <vue-icon />
      </div>
      <div title="Webpack" class="flex justify-center items-center">
        <webpack-icon />
      </div>
      <div title="JavaScript" class="flex justify-center items-center">
        <js-icon />
      </div>
      <div title="TypeScript" class="flex justify-center items-center">
        <typescript-icon />
      </div>
      <div title="NodeJs" class="flex justify-center items-center">
        <node-js-icon />
      </div>
      <div title="HTML" class="flex justify-center items-center">
        <html-icon />
      </div>
      <div title="CSS" class="flex justify-center items-center">
        <css-icon />
      </div>
      <div title="SASS" class="flex justify-center items-center">
        <sass-icon />
      </div>
      <div title="Git" class="flex justify-center items-center">
        <git-icon />
      </div>
      <div title="MySql" class="flex justify-center items-center">
        <mysql-icon />
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "~/components/Section";
import VueIcon from "~/assets/svg/vue.svg";
import WebpackIcon from "~/assets/svg/webpack.svg";
import JsIcon from "~/assets/svg/js.svg";
import TypescriptIcon from "~/assets/svg/typescript.svg";
import NodeJsIcon from "~/assets/svg/nodejs.svg";
import HtmlIcon from "~/assets/svg/html.svg";
import CssIcon from "~/assets/svg/css.svg";
import SassIcon from "~/assets/svg/sass.svg";
import GitIcon from "~/assets/svg/git.svg";
import MysqlIcon from "~/assets/svg/mysql.svg";
import DownArrowIcon from "~/assets/svg/down-arrow.svg";

export default {
  components: {
    Section,
    VueIcon,
    WebpackIcon,
    JsIcon,
    TypescriptIcon,
    NodeJsIcon,
    HtmlIcon,
    CssIcon,
    SassIcon,
    GitIcon,
    MysqlIcon,
    DownArrowIcon,
  },
};
</script>