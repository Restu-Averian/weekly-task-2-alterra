<template>
  <main>
    <default-layout />
    <summary-awal />
  </main>
</template>

<script>
import summaryAwal from "../components/summaryAwal.vue";
import defaultLayout from "../layouts/defaultLayout.vue";
export default {
  components: { summaryAwal, defaultLayout },
};
</script>

<style scoped>
</style>