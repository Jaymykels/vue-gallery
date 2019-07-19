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
        @click.native="view(item)"
      />
    </div>
    <div
      v-if="modal"
      @click.self="modal = false"
      class="fixed inset-0 z-50 overflow-auto bg-smoke flex"
    >
      <span class="absolute inset-y-auto right-0 p-16" @click="modal = false">
        <svg
          class="h-6 w-6 fill-current text-white"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
      <Preview :image="item" />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import ImageCard from "../components/ImageCard";
import Preview from "../components/Preview";
import { setTimeout } from "timers";
export default {
  components: {
    SearchInput,
    ImageCard,
    Preview
  },
  methods: {
    search(value) {
      console.log(value);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    view(item) {
      (this.modal = true), (this.item = item);
    }
  },
  data() {
    return {
      items: null,
      loading: false,
      modal: false,
      item: {}
    };
  },
  mounted() {
    this.load();
  }
};
</script>

<style>
@media (min-width: 992px) {
  .grid {
    column-count: 3;
  }
}
</style>
