<template>
    <div class="card" :class="{'card--outlined': outlined}">
        <div class="card-wrapper__text-section ">
            <div class="card__title text-center" v-if="title">
              {{title}}
            </div>
            <div class="card__subtitle text-center" v-if="subTitle">
                {{subTitle}}
            </div>
        </div>
        <div class="card-wrapper__text-section text-center">
            <div class="card__paragraph" v-if="paragraph">
                {{paragraph}}
            </div>
        </div>
        <div class="card__actions">
            <Button outlined white :to="to">
              Revisar
            </Button>
        </div>
    </div>
</template>

<script>
import Button from './Button'

export default {
  components: {
    Button
  },
  props: {
    outlined: {
      type: Boolean
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    paragraph: {
      type: String
    },
    to: {
      type: String
    }
  }

}
</script>

<style lang="scss">
.card {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    display: flex;
    flex-direction: column;

    &--outlined{
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, .12);
        border-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }
    &-wrapper__text-section {
        padding-left: 16px;
        padding-right: 16px;
        &:last-child {
          padding-bottom: 16px;
        }
        &:first-child {
          padding-top: 16px;
        }
        &+& {
            padding-top: 18px;
        }
    }

    &__title {
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: .0125em;
        text-decoration: inherit;
        text-transform: inherit;
    }

    &__subtitle {
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: .0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
        opacity: .6;
    }

    &__paragraph {
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 400;
        letter-spacing: .0178571429em;
        text-decoration: inherit;
        text-transform: inherit;
    }

    &__actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        min-height: 52px;
        padding: 8px;
    }
}
</style>