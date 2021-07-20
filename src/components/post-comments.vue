<template>
  <ul class="px-4">
    <li v-for="comment in post.comments" :key="comment.id">
      <a class="font-sans text-sm hover:underline" href="#">
        <b>{{ comment.user.name }}</b></a
      >
      {{ comment.text }}
    </li>
  </ul>
  <div class="mt-4 flex text-sm border-t border-gray-300">
    <textarea
      v-model="commentText"
      class="flex-grow p-4 focus:outline-none resize-none"
      name="commentText"
      id="textarea"
      autocomplete="off"
      autocorrect="off"
      placeholder="Добавьте комментарий..."
      rows="1"
    />
    <button
      class="px-4 py-2 font-bold bg-white"
      :class="commentText ? 'text-blue-400 cursor-pointer' : 'text-blue-200 cursor-default'"
      @click="handleCommentSubmit"
    >
      <!-- @keypress.enter="handleCommentSubmit" -->
      Опубликовать
    </button>
  </div>
</template>

//
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentText: null,
    };
  },
  methods: {
    handleCommentSubmit() {
      if (!this.commentText) {
        return;
      }

      this.$store.dispatch("addComment", { commentText: this.commentText, postId: this.post.id });
      this.commentText = null;
    },
  },
};
</script>
