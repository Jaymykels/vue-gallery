<template>
  <div class="p-2 w-full h-full">
    <figure class="overflow-hidden rounded-lg relative">
      <img
        :src="`https://source.unsplash.com/random/${Math.floor(Math.random() * (400 - 200) + 200)}x${Math.floor(Math.random() * (400 - 200) + 200)}`"
        alt="Unplash Image"
        class="block h-auto w-full cursor-pointer"
      />
      <div
        class="absolute p-4 bottom-0 w-full text-white antialiased"
        style="background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%)"
      >
        <p>Title</p>
        <p class="text-xs">Subtitle</p>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>