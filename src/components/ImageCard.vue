<template>
  <div class="p-2 w-full h-full">
    <figure class="overflow-hidden rounded-lg relative">
      <!-- Image Skelenton -->
      <SkelentonBox
        v-if="loading"
        width="100%"
        :height="`${Math.floor(Math.random() * (400 - 200) + 200)}px`"
      />
      <!-- Image -->
      <img
        v-else
        :src="data.urls.small"
        alt="Unplash Image"
        class="block h-auto w-full cursor-pointer"
      />
      <!-- Shadow background -->
      <div
        v-if="data.user || loading"
        class="absolute p-4 bottom-0 w-full text-white antialiased"
        style="background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%)"
      >
        <!-- Title Skelemnton -->
        <div v-if="loading">
            <SkelentonBox v-for="i in 2" :key="i"/>
        </div>
        <!-- Title -->
        <div v-else>
            <p>{{data.user.name}}</p>
            <p class="text-xs">{{data.user.location}}</p>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
import SkelentonBox from "./SkelentonBox";
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SkelentonBox
  }
};
</script>