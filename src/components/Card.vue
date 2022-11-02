<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    detailTask: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="my-5 w-96 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {{ detailTask.title }}
    </h5>
    <h6 class="text-sm">(date)28/09/2022 07:46</h6>
    <p
      class="my-3 h-24 cursor-default overflow-y-auto font-normal text-gray-700 no-scrollbar"
    >
      {{ detailTask.description }}
    </p>
    <div class="my-2 flex gap-5 overflow-x-auto no-scrollbar">
      <p
        v-for="tag in detailTask.tags"
        :key="tag"
        class="rounded-lg bg-gray-300 p-1 text-sm text-gray-700"
      >
        #{{ tag }}
      </p>
    </div>
    <div class="flex items-center justify-between">
      <div
        class="inline-flex cursor-pointer items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Read more
      </div>
      <div class="flex gap-5">
        <div class="cursor-pointer opacity-50 hover:opacity-100">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </div>
        <div class="cursor-pointer opacity-50 hover:opacity-100">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
