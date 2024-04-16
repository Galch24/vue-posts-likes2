<template>
  <div v-if="filteredPosts.length > 0">
    <post-item
      v-for="post in filteredPosts"
      :post="post"
      :key="post.id"
      @on-like="$emit('on-like', post)"
      @on-dislike="$emit('on-dislike', post)"
    >
      <template #actions>
        <div class="flex">
          <primary-button @click="handleLike(post.id)">
            <like-icon />
          </primary-button>
          <primary-button @click="handleDislike(post.id)">
            <dislike-icon />
          </primary-button>
        </div>
      </template>
    </post-item>
    <div class="flex flex-row mx-auto content-center justify-center mb-4 mt-4">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="rounded-md m-1 py-2 px-3 border-slate-400 border-solid border-2"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
  <div v-else class="text-slate-400">{{ emptyListMessage }}</div>
</template>

<script>
import PostItem from "@/components/PostItem";
import LikeIcon from "@/components/icons/LikeIcon";
import DislikeIcon from "@/components/icons/DislikeIcon";
import { mapActions } from "vuex";

export default {
  components: { PostItem, LikeIcon, DislikeIcon },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    emptyListMessage: {
      type: String,
      default: "Список публикаций пуст",
    },
    showLike: {
      type: Boolean,
      default: false,
    },
    showDislike: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      perPage: 5,
      page: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.perPage);
    },
    filteredPosts() {
      return this.posts.slice(
        this.page * this.perPage,
        (this.page + 1) * this.perPage
      );
    },
  },
  methods: {
    ...mapActions({
      setPostLike: "post/setPostLike",
      setPostDislike: "post/setPostDislike",
    }),
    changePage(pageNumber) {
      this.page = pageNumber - 1;
    },
    handleLike(id) {
      this.setPostLike(id);
    },
    handleDislike(id) {
      this.setPostDislike(id);
    },
  },
};
</script>

<style scoped>
.current-page {
  border: 2px solid teal;
}
</style>
