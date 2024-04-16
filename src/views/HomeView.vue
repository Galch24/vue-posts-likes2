<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    PostList,
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
    }),
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
  },
};
</script>
