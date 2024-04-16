<template>
  <button class="btn py-2 px-4 rounded-md m-1 border-lime-600">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
};
</script>

<style scoped>
.btn {
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
