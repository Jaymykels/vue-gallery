<template>
  <div class="bg-gray-300 lg:h-64 h-32 lg:-mb-12 -mb-6">
    <div class="lg:py-24 lg:px-24 px-8 py-8">
      <!-- Search Description -->
      <div v-if="isSearch" class="flex justify-between">
        <h1 class="text-gray-800 lg:pl-10 lg:text-4xl text-xl font-semibold">
          {{ loading ? "Searching for " : "Search Results for "}}
          <span
            class="text-gray-500"
          >"{{ keyword }}"</span>
        </h1>
        <svg
          class="fill-current cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 18 18"
          @click="reset()"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          />
        </svg>
      </div>

      <!-- Search Input -->
      <div v-else class="relative">
        <input
          class="w-full h-16 pl-16 rounded focus:outline-none text-xl text-black px-8 shadow-lg"
          type="search"
          placeholder="Search for photo"
          v-model="keyword"
          @keyup.enter="search()"
        />
        <svg
          class="absolute m-6 svg-icon fill-current top-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
            c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
            c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
            s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      keyword: "",
      isSearch: false
    };
  },
  methods: {
    search() {
      this.isSearch = true;
      this.$emit("search", this.keyword)
    },
    reset() {
      this.isSearch = false;
      this.keyword = ""
      this.$emit("reset")
    }
  }
};
</script>