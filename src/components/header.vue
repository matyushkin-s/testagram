<template>
  <header class="bg-white border-b border-gray-300">
    <div class="w-content mx-auto py-4 flex justify-between">
      <a class="logo" href="/"
        ><img class="inline-block" src="./../assets/logo.svg" alt="testagram"
      /></a>
      <div class="relative">
        <ul class="flex space-x-2">
          <li class="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">+</li>
          <li
            @click="handleMenuToggle"
            class="
              bg-gray-300
              cursor-pointer
              font-bold
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            AM
          </li>
        </ul>
        <div
          v-if="isMenuShown"
          class="bg-white w-72 h-64 absolute top-0 right-0 mt-12 border border-gray-300 rounded-md"
        >
          Menu
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { isMenuShown: false };
  },
  methods: {
    handleMenuToggle() {
      this.isMenuShown = !this.isMenuShown;
    },
  },
};
</script>
