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

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
