<template>
  <r-input
    :label="label"
    :computedId="computedId"
    :hasValue="hasValue"
    :isFocused="isFocused"
    @click-input="clickInput"
  >
    <template v-slot:prepend>
      <component
        :is="prependIcon + '-icon'"
        class="input__icon"
        v-if="prependIcon"
      />
    </template>
    <template v-slot:input>
      <input
        autocomplete="off"
        v-model="internalValue"
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
    <template v-slot:append>
      <component
        :is="appendIcon + '-icon'"
        class="input__icon"
        v-if="appendIcon"
      />
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
  </r-input>
</template>

<script>
import RInput from "@/components/atoms/Input";
import SearchIcon from "~/assets/icons/icon-search.svg";
import CloseIcon from "~/assets/icons/icon-close.svg";

export default {
  name: "TextField",
  inheritAttrs: false,
  components: {
    RInput,
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
    value: { required: false },
  },
  data() {
    return {
      hasFocused: false,
      isFocused: false,
    };
  },
  computed: {
    computedId() {
      return this.id || `input-${this._uid}`;
    },
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        typeof this.$emit("input", val);
      },
    },
    hasValue() {
      return (
        typeof this.internalValue === "boolean" ||
        typeof this.internalValue === "number" ||
        (typeof this.internalValue === "string" &&
          this.internalValue.length > 0)
      );
    },
  },
  mounted() {
    if (this.isFocus) {
      this.clickInput();
    }
  },
  methods: {
    onFocus(e) {
      this.isFocused = true;

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
    clearableCallback() {
      this.$refs.input && this.$refs.input.focus();
      this.$nextTick(() => (this.internalValue = ""));
    },
  },
};
</script>
