<template>
  <g-input
    :label="label"
    :computedId="computedId"
    :hasValue="hasValue"
    :isFocused="isFocused"
    @click-input="clickInput"
  >
    <template v-slot:input>
      <input
        autocomplete="off"
        v-model="internalValue"
        class="w-full outline-none"
        @keyup="onKeyup"
        v-bind="$attrs"
        :id="computedId"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        @keydown="onKeyDown"
        ref="input"
      />
    </template>
    <template v-slot:left>
      <component
        :is="prependIcon + '-icon'"
        class="h-7 w-7"
        v-if="prependIcon"
      />
    </template>
    <template v-slot:right>
      <component :is="appendIcon + '-icon'" class="h-7 w-7" v-if="appendIcon" />
      <button
        class="flex items-center justify-center focus:outline-none"
        v-if="clearable"
        @click="clearableCallback"
      >
        <close-icon
          v-if="hasValue"
          class="block h-7 w-7 transition-colors duration-300 ease-linear outline-none"
        />
      </button>
    </template>
  </g-input>
</template>

<script>
import GInput from "./Input";
import SearchIcon from "~/assets/icons/icon-search.svg";
import CloseIcon from "~/assets/icons/icon-close.svg";
import Validatable from "~/mixins/validatable";

export default {
  name: "TextField",
  mixins: [Validatable],
  inheritAttrs: false,
  components: {
    GInput,
    SearchIcon,
    CloseIcon,
  },
  props: {
    label: [String, Number, undefined, null],
    isFocus: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedId() {
      return this.id || `input-${this._uid}`;
    },
  },
  mounted() {
    if(this.isFocus) {
      this.clickInput();
    }
  },
  methods: {
    onFocus(e) {
      this.isFocused = true;
      this.searchResultsVisible = true;

      this.$emit("focus", e);
    },
    onKeyup(e) {
      this.$emit("keyup", e);
    },
    onKeyDown(e) {
      this.$emit("keydown", e);
    },
    onBlur(e) {
      this.isFocused = false;
      this.searchResultsVisible = false;
      this.$emit("blur", e);
    },
    onInput(e) {
      const target = e.target;
      this.internalValue = target.value;
      
      this.$emit("highlight-reset", e);
    },
    clickInput() {
      if (document.activeElement !== this.$refs["input"]) {
        return this.$refs["input"].focus();
      }
    },
  },
};
</script>
