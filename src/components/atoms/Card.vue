<template>
  <div class="card" :class="cardClass">
    <div class="card__image" v-if="hasImageSlot">
      <slot name="card-image"></slot>
    </div>
    <div class="card__title">
      {{ title }}
    </div>
    <div class="card__subtitle" v-if="subTitle">
      {{ subTitle }}
    </div>
    <div class="card__text">
      <slot name="card-text">
        {{ text }}
      </slot>
    </div>
    <div class="card__actions" :class="classActions" v-if="hasActionsSlot">
      <slot name="card-actions"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "RCard",
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    text: {
      type: String,
    },
    classActions: {
      type: String,
    },
    withHover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasImageSlot() {
      return !!this.$slots["card-image"];
    },
    hasActionsSlot() {
      return !!this.$slots["card-actions"];
    },
    cardClass() {
      return {
        "card--hover": this.withHover,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply rounded bg-gray-900 flex flex-col box-border outline-none transition-colors duration-300 ease-in;

  &--hover {
    @apply hover:bg-gray-700;
  }

  &__title,
  &__subtitle,
  &__text {
    @apply p-4;
  }

  &__subtitle + &__text {
    @apply pt-0;
  }

  &__title + &__text {
    @apply pt-0;
  }

  &__title {
    @apply flex items-center flex-wrap font-bold text-xl tracking-wide leading-8 break-words;
  }

  &__subtitle {
    @apply text-lg font-medium text-gray-400 -mt-4 pt-0 leading-5 tracking-wide;
  }

  &__text {
    @apply w-full text-base font-normal leading-5 tracking-wide;
  }

  &__actions {
    @apply flex items-center p-4;
  }

  &__image {
    height: 200px;

    @apply relative;

    .g-image {
      @apply rounded-t bg-center bg-cover bg-no-repeat w-full h-full absolute;
    }
  }
}
</style>