<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <div class="content pt-8">
      <div class="w-content mx-auto">content</div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  components: { Header },
};
</script>
