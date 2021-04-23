<template>
<button class="
  w-full
  border
  border-gray-600
  rounded-md
  px-2
  py-1
  text-white
  focus:outline-none
  hover:shadow-sm
"
  :class="{
    'bg-gray-500 hover:bg-gray-600 active:bg-gray-700': !disabled && look === 'primary',
    'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700': !disabled && look === 'success',
    'bg-gray-200 hover:bg-gray-200 active:bg-gray-200 text-gray-400': disabled,
  }"
  :type="type" v-bind="$attrs" v-on="$listeners">
  <slot/></button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type', 'look'],
  computed: {
    disabled() {
      return this.$attrs.disabled || this.$attrs.disabled === '';
    },
  },
};
</script>

<style scoped>

</style>
