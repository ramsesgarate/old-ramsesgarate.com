export default {
  name: 'validatable',
  props: {
    value: { required: false },
    trimAble: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hasFocused: false,
      isFocused: false,
      isResetting: false,
      valid: false,
    }
  },
  watch: {
    internalValue() {
      if (this.isResetting) return

    },
    isFocused(val) {
      if (this.validateOnBlur && val) {
        this.errorBucket = []
      }
      if (!val && !this.disabled) {
        this.hasFocused = true
        if (this.isResetting) return
        this.$nextTick(this.validate)
      }
    },
  },
  computed: {
    internalValue: {
      get() {
        return  this.value
      },
      set(val) {
        typeof this.$emit('input', val)
      },
    },
    hasValue() {
      return (
        typeof this.internalValue === 'boolean' ||
        typeof this.internalValue === 'number' ||
        (typeof this.internalValue === 'string' && this.internalValue.length > 0)
      )
    },
  },
  methods: {
    /** @public */
    clearableCallback() {
      this.$refs.input && this.$refs.input.focus()
      this.$nextTick(() => this.internalValue = null)
    },

  },
}
