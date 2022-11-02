<template>
  <div class="container mx-auto w-[700px] py-5">
    <form>
      <div class="mx-auto mb-6" bis_skin_checked="1">
        <div bis_skin_checked="1">
          <label
            for="first_name"
            class="mb-2 block text-sm font-medium text-gray-900"
            >Title</label
          >
          <input
            type="text"
            id="first_name"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
            placeholder="title"
          />
        </div>

        <div bis_skin_checked="1">
          <label
            for="phone"
            class="mb-2 block text-sm font-medium text-gray-900"
            >Description</label
          >
          <input
            type="text"
            id="phone"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="description"
            required
          />
        </div>
        <div bis_skin_checked="1">
          <label
            for="website"
            class="mb-2 block text-sm font-medium text-gray-900"
            >Tag</label
          >
          <input
            id="website"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            type="text"
            placeholder="enter to add tag"
            autocomplete="off"
          />
        </div>
        <div bis_skin_checked="1">
          <label
            for="visitors"
            class="mb-2 block text-sm font-medium text-gray-900"
            >Task</label
          >
          <input
            type="text"
            id="visitors"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="enter to add task"
            autocomplete="off"
          />
        </div>
        <button
          type="submit"
          class="mt-10 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
    <div class="border p-8">
      <h5 class="text-xs opacity-60">click to delete!</h5>
      <h4>tags:</h4>
      <p class="mt-3">
        <span
          class="mr-2 cursor-pointer overflow-auto border bg-gray-300 p-1 no-scrollbar"
        >
          #tag
        </span>
      </p>
    </div>
    <div class="border p-10">
      <h4>tasks:</h4>
      <div class="mr-4 flex gap-3 py-2">
        <svg
          class="h-6 w-6 cursor-pointer opacity-50"
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
        <input type="checkbox" />
        <p>task</p>
        <hr />
      </div>
    </div>
  </div>
</template>
