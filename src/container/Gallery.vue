<template>
  <div class="content-center lg:my-12 my-4 mx-auto lg:px-12 px-4">
    <!-- Search Component -->
    <SearchInput v-on:search="search($event)" v-on:reset="load()" :loading="loading" />
    <!-- Image Columns -->
    <div class="mx-auto z-10 w-3/4 grid">
      <!-- Image Card Component -->
      <ImageCard
        v-for="(item, index) in items || Array(8).fill({})"
        :key="index"
        :data="item"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import ImageCard from "../components/ImageCard";
import { setTimeout } from 'timers';
export default {
  components: {
    SearchInput,
    ImageCard
  },
  methods: {
    search(value) {
      console.log(value);
    },
    load() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000);
    }
  },
  data() {
    return {
      items: null,
      loading: false
    };
  },
  mounted() {
    this.load()
  },
};
</script>

<style>
@media (min-width: 992px) {
  .grid {
    column-count: 3;
  }
}
</style>
