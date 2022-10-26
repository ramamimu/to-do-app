<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { useToDoStore } from "../stores/toDoList";
export default {
  setup() {
    const ToDoStore = useToDoStore();
    return {
      ToDoStore,
    };
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="container mx-auto flex items-center justify-between border">
    <a href="/">
      <div class="mx-10 my-5 cursor-pointer">
        <h2 class="text-4xl font-black">To Do App</h2>
      </div>
    </a>
    <div class="mx-10 flex gap-2">
      <div class="relative" bis_skin_checked="1">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search"
          v-model="ToDoStore.search"
        />
      </div>
      <button
        type="button"
        class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Add List
      </button>
    </div>
  </div>
</template>
