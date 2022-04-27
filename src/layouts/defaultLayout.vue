<template>
  <div>
    <v-app-bar color="primary" app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Summary (Restu Averian Kelas A VueJS)</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <search-view /> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="side in sidebar"
            :key="side.id"
            @click="changeSection(`${side.id}`)"
          >
            <!-- <v-list-item-icon>
              <v-icon>{{ side.icon }}</v-icon>
            </v-list-item-icon> -->
            <v-list-item-title> {{ side.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      sidebar: [
        {
          id: 1,
          name: "02 Version Control and Branch Management (Git)",
        },
        {
          id: 2,
          name: "03 Introduction UI dan UX",
        },
        {
          id: 3,
          name: "04 Figma",
        },
        {
          id: 4,
          name: "05 HTML",
        },
        {
          id: 5,
          name: "06 CSS",
        },
        {
          id: 6,
          name: "07 Bootstrap",
        },
        {
          id: 7,
          name: "08 Javascript Refreshment",
        },
        {
          id: 8,
          name: "09 Clean Code",
        },
        {
          id: 9,
          name: "10 Frontend Fundamental",
        },
        {
          id: 10,
          name: "11 Vue Fundamental",
        },
        {
          id: 11,
          name: "12 Vue CLI",
        },
        {
          id: 12,
          name: "13 Komponen Vue",
        },
        {
          id: 13,
          name: "14 Vue Helpers",
        },
        {
          id: 14,
          name: "15 Vue Data",
        },
        {
          id: 15,
          name: "16 Vue Quality Control",
        },
        {
          id: 16,
          name: "17 Vue UI Framework",
        },
        {
          id: 17,
          name: "18 Work Together With Product – Backend and Devops",
        },
        {
          id: 18,
          name: "19 Vue With Nuxt",
        },
        {
          id: 19,
          name: "20 Algorithm",
        },
        {
          id: 20,
          name: "21 GraphQL Basic",
        },
        {
          id: 21,
          name: "22 Relational Database",
        },
        {
          id: 22,
          name: "23 GraphQL Query",
        },
        {
          id: 23,
          name: "24 GraphQL Mutation",
        },
        {
          id: 24,
          name: "25 GraphQL Subscription",
        },
      ],
    };
  },
  computed: {
    dataSummary() {
      return this.$store.state.summary.summary.data;
    },
  },
  methods: {
    changeSection(section) {
      this.$store.dispatch("summary/updateSummary", section);
    },
  },
};
</script>

<style scoped>
nav {
  text-align: left;
}
</style>