<template>
  <div class="font-sans text-sm px-4">
    <div class="iconsSection flex flex-row">
      <Like />
      <Comment />
      <Share />
    </div>
  </div>
</template>

<script>
import Like from "@/components/icons/like.vue";
import Comment from "@/components/icons/comment.vue";
import Share from "@/components/icons/share.vue";

export default {
  components: { Like, Comment, Share },
};
</script>
