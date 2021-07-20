<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <div
      v-if="!posts.length"
      class="
        w-content
        mx-auto
        mt-8
        bg-yellow-50
        border border-gray-200
        rounded
        px-4
        py-2
        text-gray-400
      "
    >
      Ничего не найдено. Нет пользователей с таким никнеймом.
    </div>

    <ul class="pt-8">
      <li class="mb-4" v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/header.vue";
import Post from "./components/post.vue";

export default {
  components: { Header, Post },
  computed: {
    ...mapGetters(["posts"]),
  },
  mounted() {
    console.log("App component is mounted");
    this.$store.dispatch("fetchPosts");
  },
};
</script>
