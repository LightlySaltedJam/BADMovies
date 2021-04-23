<template>
  <input
    class="px-5 py-2 border-2 rounded focus:border-yellow-500 focus:outline-none"
    :class="{
      'border-gray-600': isValid,
      'border-red-500': !isValid,
    }"
    :type="type"
    v-bind:value="value"
    @input="$emit('input', $event.target.value)"
    @focusin="isValid = true"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: [String],
    value: [String],
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isValid: this.valid,
    };
  },
  watch: {
    valid(newV) {
      this.isValid = newV;
    },
  },
};
</script>

<style scoped></style>
