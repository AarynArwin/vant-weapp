import { VantComponent } from '../common/component';

VantComponent({
  field: true,

  classes: ['node-class'],

  props: {
    checked: Boolean,
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      value: '30px'
    }
  },

  watch: {
    checked(value) {
      this.set({ value });
    }
  },

  computed: {
    style() {
      const backgroundColor = this.data.checked ? this.data.activeColor : this.data.inactiveColor;
      return `font-size: ${this.data.size}; ${ backgroundColor ? `background-color: ${backgroundColor}` : '' }`
    }
  },

  created() {
    this.set({ value: this.data.checked });
  },

  methods: {
    onClick() {
      if (!this.data.disabled && !this.data.loading) {
        const checked = !this.data.checked;
        this.$emit('input', checked);
        this.$emit('change', checked);
      }
    }
  }
});
