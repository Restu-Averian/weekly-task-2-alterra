<template>
  <v-card class="mx-auto my-10" max-width="1000">
    <v-img :src="dataSummary.gambar"></v-img>

    <v-card-title> {{ dataSummary.title }}</v-card-title>

    <v-card-subtitle>{{ dataSummary.penjelasan }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary lighten-2" text @click="show = !show">
        Lebih lanjut
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text v-html="dataSummary.deskripsi"> </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    dataSummary() {
      return this.$store.state.summary.summary.data;
    },
  },
  methods: {
    fetchSummary() {
      this.$store.dispatch("summary/fetchSummary");
    },
  },
  mounted() {
    this.fetchSummary();
  },
};
</script>

<style scoped>
.summary {
  padding: 10px;
  margin: 10px 0px;
}
</style>