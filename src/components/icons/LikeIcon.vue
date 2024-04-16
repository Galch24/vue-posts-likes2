<template>
  <svg
    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-18wq8ra"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ThumbUpAltOutlinedIcon"
    tabindex="-1"
    title="ThumbUpAltOutlined"
    :width="width"
    :height="height"
  >
    <path
      d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2m0 4-3 7H9V9l4.34-4.34L12.23 10H21zM1 9h4v12H1z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "LikeIcon",
  props: {
    width: {
      type: [Number, String],
      default: "24",
    },
    height: {
      type: [Number, String],
      default: "24",
    },
  },
};
</script>

<style scoped></style>
