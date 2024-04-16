<template>
  <div class="container">
    <h1 class="text-2xl font-bold">Список постов</h1>
    <PostList :posts="neutralPosts" />
    <h2 class="text-xl font-bold mt-4">Понравилось</h2>
    <PostLikeList :posts="likePosts" emptyListMessage="Список пуст" />
    <h2 class="text-xl font-bold mt-4">Не понравилось</h2>
    <PostDislikePost :posts="dislikePosts" emptyListMessage="Список пуст" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { mapActions, mapState, mapGetters } from "vuex";
import PostLikeList from "@/components/PostLikeList";
import PostDislikePost from "@/components/PostDislikeList";

export default {
  components: {
    PostDislikePost,
    PostLikeList,
    PostList,
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
    }),
    ...mapGetters({
      neutralPosts: "post/neutralPosts",
      likePosts: "post/likePosts",
      dislikePosts: "post/dislikePosts",
    }),
  },
  mounted() {
    this.fetchPosts({ pageNumber: 1, limit: 20 });
  },
  methods: {
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),
  },
};
</script>

<style scoped></style>
