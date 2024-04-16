import axios from "axios";

export const posts = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    searchQuery: "",
    page: 1,
    limit: 30,
    totalPages: 0,
  }),
  getters: {
    neutralPosts: (state) => state.posts.filter((item) => item.like === 0),
    likePosts: (state) => state.posts.filter((item) => item.like > 0),
    dislikePosts: (state) => state.posts.filter((item) => item.like < 0),
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setLimit(state, perPage) {
      state.limit = perPage;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setPostLike(state, id) {
      state.posts = state.posts.map((item) => {
        if (item.id === id) {
          item.like = item.like === 1 ? item.like : item.like + 1;
        }
        return item;
      });
    },
    setPostDislike(state, id) {
      state.posts = state.posts.map((item) => {
        if (item.id === id) {
          item.like = item.like === -1 ? item.like : item.like - 1;
        }
        return item;
      });
    },
  },
  actions: {
    async fetchPosts({ state, commit }, { pageNumber, limit }) {
      const pageNum = pageNumber || 1;
      const perPage = limit || 5;
      commit("setLimit", perPage);
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: pageNum,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit(
          "setPosts",
          response.data.map((item) => {
            return {
              ...item,
              ...{ like: 0 },
            };
          })
        );
        commit("setPage", pageNum);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    },
    setPostLike({ commit }, id) {
      commit("setPostLike", id);
    },
    setPostDislike({ commit }, id) {
      commit("setPostDislike", id);
    },
  },
  namespaced: true,
};
