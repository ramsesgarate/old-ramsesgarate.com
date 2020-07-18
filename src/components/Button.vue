<template>
  <div>
    <g-link v-if="to"
      :to="to"
      class="btn btn-primary btn-size--default btn-shadow" 
      :class="{
        'btn--outlined': outlined, 
        'btn--text': text, 
        'btn--dark': dark,
        'white': white
      }"
      type="button"
    >
      <span class="btn__content">
        <slot>Boton</slot>
      </span>
      
    </g-link>
    <button v-else
      class="btn btn-primary btn-size--default btn-shadow" 
      :class="{
        'btn--outlined': outlined, 
        'btn--text': text, 
        'btn--dark': dark,
        'white': white
      }"
      type="button"
    >
      <span class="btn__content">
        <slot>Boton</slot>
      </span>
      
    </button>
  </div>

  
</template>

<script>
export default {
  props: {
    outlined: {
      type: Boolean
    },
    text: {
      type: Boolean
    },
    to: {
      type: String
    },
    dark: {
      type: Boolean
    },
    white: {
      type: Boolean
    }
  }

}
</script>

<style lang="scss">
@import '~/assets/style/base/variables.scss';

.btn {
    align-items: center;
    border-radius: 6px;
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: .0892857143rem;
    justify-content: center;
    outline: 0;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    vertical-align: middle;
    cursor: pointer;
    border-style: none;
    transition: opacity .2s;

    &:hover {
          opacity: .8;
    }
  

    &--outlined {
      background-color: transparent;
    }

    &-size--default {
      height: 36px;
      min-width: 64px;
      padding: 0 16px;
      font-size: .875rem;
    }

    &-size--small {
        height: 28px;
        min-width: 50px;
        padding: 0 12.4444444444px;
        font-size:  .75rem;
    }

    &__content {
        color: inherit;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-shadow {
      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    }
    &>i.icon {
        margin-right: 6px;
    }

    &-primary {
        background-color: #275efe;
        color: #fff;
    }

    &--dark {
        background-color: #50fa7b;
        color: #282936;
    }

    &.btn--outlined {
        color: #275efe;
        background-color: transparent;
        border: 1px solid #275efe;
        box-shadow: none;
        &:hover {
            background-color: #275dfe10;
            box-shadow: none;
        }
    }

    &.btn--text {
        color: #275efe;
        background-color: transparent;
        border: 1px solid transparent;
        &:hover {
            background-color: #275dfe10;
            box-shadow: none;
        }
    }
}

.white {
  background-color: #fff!important;
}
</style>