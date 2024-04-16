<template>
  <div class="post flex max-w-2xl mx-auto bg-white rounded-md shadow-lg">
    <div>
      <div>{{ post.id }}</div>
      <div>
        <router-link
          class="text-slate-900 font-medium"
          :to="`/posts/${post.id}`"
          >{{ post.title }}</router-link
        >
      </div>
      <div class="text-slate-700 font-small">{{ post.body }}</div>
    </div>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}
.post-actions {
  display: flex;
}
</style>
