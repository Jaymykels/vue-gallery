<template>
  <div class="p-8 w-full max-w-lg flex flex-col m-auto">
    <figure class="overflow-hidden rounded-lg shadow-lg">
      <img
        :src="image.urls.full"
        alt="Unplash Image"
        class="h-auto block w-full"
      />
      <div class="p-4 pl-10 bg-white">
        <h3 class="text-gray-800 font-bold">{{image.user.name}}</h3>
        <p class="py-2 text-xs text-gray-600">{{image.user.location}}</p>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    }
  }
};
</script>