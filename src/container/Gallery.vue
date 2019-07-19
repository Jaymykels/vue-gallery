<template>
  <div class="content-center lg:my-12 my-4 mx-auto lg:px-12 px-4">
    <SearchInput v-on:search="search($event)" v-on:reset="load()" />
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
export default {
  components: {
    SearchInput
  },
  methods: {
    search(value) {
      console.log(value);
    },
    load() {
      console.log("load");
    }
  }
};
</script>