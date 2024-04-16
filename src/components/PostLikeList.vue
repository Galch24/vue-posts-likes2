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
          <primary-button @click="handleDislike(post.id)">
            <cancel-icon />
          </primary-button>
        </div>
      </template>
    </post-item>
    <div class="flex flex-row mx-auto content-center justify-center mb-4 mt-4">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="rounded-md m-1 py-1 px-3 border-slate-400 border-solid border-2"
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
import { mapActions } from "vuex";
import CancelIcon from "@/components/icons/CancelIcon";

export default {
  name: "PostLikePost",
  components: { CancelIcon, PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    emptyListMessage: {
      type: String,
      default: "Список пуст",
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
      setPostDislike: "post/setPostDislike",
    }),
    changePage(pageNumber) {
      this.page = pageNumber - 1;
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
