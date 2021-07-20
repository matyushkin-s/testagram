<template>
  <header class="bg-white border-b border-gray-300">
    <div class="w-content mx-auto py-4 flex justify-between">
      <a class="logo" href="/">
        <img class="inline-block h-8" src="./../assets/logo.svg" alt="testagram" />
      </a>
      <input
        v-model="search"
        @keypress.enter="handleSearch"
        class="
          border border-gray-400
          rounded
          px-4
          py-2
          mx-4
          focus:border-blue-200 focus:outline-none
          text-sm
          h-7
        "
        placeholder="Поиск"
        type="text"
      />

      <div class="relative">
        <ul class="flex space-x-2">
          <li
            class="
              bg-gray-300
              w-8
              h-8
              rounded-full
              flex
              items-center
              justify-center
              text-sm
              cursor-not-allowed
            "
          >
            +
          </li>
          <li
            @click="handleMenuToggle"
            class="
              bg-gray-300
              cursor-pointer
              font-bold
              w-8
              h-8
              rounded-full
              flex
              items-center
              justify-center
              text-sm
            "
          >
            AM
          </li>
        </ul>
        <div
          v-if="isMenuShown"
          class="w-72 absolute top-0 right-0 mt-12 border border-gray-300 rounded-md"
        >
          <ul class="bg-white font-sans text-sm">
            <li class="px-4 py-2 cursor-pointer hover:bg-gray-100">
              <Profile />
              <a href="#"><span>Профиль</span></a>
            </li>
            <li class="px-4 py-2 cursor-not-allowed hover:bg-gray-100">
              <Saved />
              <!-- <a href="#"> -->
              <span>Сохраненное</span>
              <!-- </a> -->
            </li>
            <li class="px-4 py-2 cursor-not-allowed hover:bg-gray-100">
              <Settings />
              <!-- <a href="#"> -->
              <span>Настройки</span>
              <!-- </a> -->
            </li>
            <li class="border px-4 py-2 cursor-not-allowed hover:bg-gray-100">
              <!-- <a href="#"> -->
              <span>Выйти</span>
              <!-- </a> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Profile from "@/components/icons/profile.vue";
import Saved from "@/components/icons/saved.vue";
import Settings from "@/components/icons/settings.vue";

export default {
  components: { Profile, Saved, Settings },

  data() {
    return { isMenuShown: false, search: null };
  },
  methods: {
    handleMenuToggle() {
      this.isMenuShown = !this.isMenuShown;
    },
    handleSearch() {
      this.$store.dispatch("search", this.search);
    },
  },
};
</script>
