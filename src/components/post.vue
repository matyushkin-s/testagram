<template>
  <div class="bg-white w-content mx-auto border border-gray-300 rounded-user">
    <PostHeader :post="post" />

    <div class="">
      <img :src="post.image" alt="" />
    </div>

    <PostActions />

    <div class="px-4">
      <p>
        {{ post.description }}
      </p>
    </div>

    <PostComments :post="post" />
  </div>
</template>

<script>
import PostHeader from "@/components/post-header.vue";
import PostActions from "@/components/post-actions.vue";
import PostComments from "@/components/post-comments.vue";

export default {
  components: { PostHeader, PostActions, PostComments },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
