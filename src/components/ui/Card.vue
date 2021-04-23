<template>
  <div
    class="flex p-5 flex-col border border-gray-300 rounded-lg shadow-md mx-auto"
    v-bind="$attrs"
  >
    <slot name="title"></slot>
    <slot name="content"></slot>
    <div class="mt-2">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped></style>
