import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./assets/index.css";

const postsResponse = [
  {
    id: 1,
    user: {
      initials: "IG",
      name: "Inna",
    },
    image: "http://localhost:3000/src/assets/img/wtf_cat.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    comments: [
      {
        id: 1,
        user: {
          initials: "DG",
          name: "Dima",
        },
        text: "Nice shot",
        data: "2021-06-10",
      },
      {
        id: 2,
        user: {
          name: "bot",
        },
        text: "What a wonderfull picture!",
        data: "2021-06-11",
      },
    ],
  },
  {
    id: 2,
    user: {
      initials: "AM",
      name: "Alexander",
    },
    image: "http://localhost:3000/src/assets/img/DSC_2990.JPG",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    comments: [
      {
        id: 3,
        user: {
          name: "insta_bot_one",
        },
        text: "Awesome!",
        data: "2021-06-11",
      },
    ],
  },
  {
    id: 3,
    user: {
      initials: "AM",
      name: "Alexander",
    },
    image: "http://localhost:3000/src/assets/img/L_DSC_3161.JPG",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    comments: [],
  },
];

// Create a new store instance.
const store = createStore({
  state() {
    return {
      posts: [],
      query: null,
    };
  },
  getters: {
    posts(state) {
      return state.query
        ? state.posts.filter((post) => post.user.name.includes(state.query))
        : state.posts;
    },
  },
  mutations: {
    loadPosts(state, posts) {
      console.log("commit mutation loadPosts");
      state.posts = posts;
    },
    addComment(state, payload) {
      console.log("commit mutation addComment:", payload);
      const post = state.posts.find((post) => payload.postId === post.id);
      const lastCommentId = post.comments.slice(-1)[0]?.id || 0;
      post.comments.push({
        id: lastCommentId + 1,
        user: {
          name: "dummy user",
        },
        text: payload.commentText,
        data: new Date(),
      });
    },
    search(state, query) {
      state.query = query;
    },
  },
  actions: {
    fetchPosts(store) {
      // fetch posts (const postsResponce) from backend API
      console.log("fetch posts from API");
      store.commit("loadPosts", postsResponse);
    },
    addComment(store, payload) {
      //   console.log("addComment:", payload);
      store.commit("addComment", payload);
    },
    search(store, query) {
      store.commit("search", query);
    },
  },
});

const app = createApp(App);

// Install the store instance as a plugin
app.use(store).mount("#app");
