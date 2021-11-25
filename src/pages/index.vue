<template>
  <div>
    <AutoImport />
    <h1>Index</h1>

    <div>
      <ul v-for="(todo, i) in todos" :key="i">
        <li>{{ todo }}</li>
      </ul>
    </div>

    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["todos"]),
  },
};
</script>

<style lang="scss" scoped></style>
