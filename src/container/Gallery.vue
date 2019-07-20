<template>
  <div class="content-center lg:my-12 my-4 mx-auto lg:px-12 px-4">
    <!-- Search Component -->
    <SearchInput v-on:search="search($event)" v-on:reset="load()" :loading="loading" />
    <!-- Image Columns -->
    <div class="mx-auto z-10 w-3/4 grid">
      <!-- Image Card Component -->
      <ImageCard
        v-for="(item, index) in items || Array(6).fill({})"
        :key="index"
        :data="item"
        :loading="loading"
        @click.native="view(item)"
      />
    </div>
    <!-- Modal -->
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
      <!-- Image Viewer -->
      <Preview :image="item" />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput";
import ImageCard from "../components/ImageCard";
import Preview from "../components/Preview";
import axios from "axios";
const ACCESS_KEY =
  "a17353f670b92d2b48b4d012ae4ccf46c8265131fbf8d4f637d04abfbca132c2";
export default {
  components: {
    SearchInput,
    ImageCard,
    Preview
  },
  methods: {
    search(value) {
      this.loading = true;
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${
            value
          }`
        )
        .then(res => {
          this.items = res.data.results;
          this.loading = false;
        })
        .catch(() => alert("Oops! Something happened connecting to server."));
    },
    load() {
      this.loading = true;
      axios
        .get(
          `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=african`
        )
        .then(res => {
          this.items = res.data.results.slice(0, 8);
          this.loading = false;
        })
        .catch(() => alert("Oops! Something happened connecting to server."));
    },
    view(item) {
      (this.modal = true), (this.item = item);
    }
  },
  data() {
    return {
      items: null,
      loading: true,
      modal: false,
      item: {}
    };
  },
  mounted() {
    setTimeout(() => {
      this.load();
    }, 3000);
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
