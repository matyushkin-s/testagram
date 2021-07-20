<template>
  <div class="flex p-4 space-x-4">
    <a href="#" class=""
      ><div
        class="
          w-6
          h-6
          rounded-full
          flex
          items-center
          justify-center
          border border-gray-300
          font-sans
          text-sm
          cursor-not-allowed
        "
      >
        {{ post.user.initials }}
      </div></a
    >
    <div class="w-full flex flex-row justify-between">
      <div class="">
        <a href="#" class="font-sans text-sm hover:underline cursor-not-allowed">
          <b>{{ post.user.name }}</b>
        </a>
        <a href="#" class=""></a>
      </div>

      <ThreeDotsIcon />
    </div>
  </div>
</template>

<script>
import ThreeDotsIcon from "@/components/icons/three-dots.vue";

export default {
  components: { ThreeDotsIcon },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
