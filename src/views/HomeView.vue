<script>
import { useToDoStore } from "../stores/toDoList";

export default {
  setup() {
    const ToDoStore = useToDoStore();
    return {
      ToDoStore,
    };
  },
  methods: {
    referLink(id, prefix) {
      const path = `${prefix}/${id}`;
      this.$router.push(path, id);
    },
  },
};
</script>

<template>
  <main>
    <div class="container mx-auto my-10 flex flex-wrap justify-around gap-5">
      <div
        v-for="list in ToDoStore.filterList()"
        :key="list.id"
        class="my-5 w-96 max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md"
        bis_skin_checked="1"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ list.title }}
        </h5>
        <h6 class="text-sm">
          {{
            `${new Date(parseInt(list.id)).getDate()}/${new Date(
              parseInt(list.id)
            ).getMonth()}/${new Date(parseInt(list.id)).getFullYear()}`
          }}

          {{
            `${new Date(parseInt(list.id)).getHours()}:${new Date(
              parseInt(list.id)
            ).getMinutes()}`
          }}
        </h6>
        <p
          class="my-3 h-24 cursor-default overflow-y-auto font-normal text-gray-700 no-scrollbar"
        >
          {{ list.description }}
        </p>
        <div class="my-2 flex flex-wrap gap-5">
          <p
            v-for="tag in list.tags"
            :key="tag"
            class="rounded-lg bg-gray-300 p-1 text-sm text-gray-700"
          >
            #{{ tag }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <div
            class="inline-flex cursor-pointer items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            @click="referLink(list.id, 'task')"
          >
            Read more
          </div>
          <div class="flex gap-5">
            <div
              class="cursor-pointer opacity-50 hover:opacity-100"
              @click="referLink(list.id, 'edit')"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                ></path>
              </svg>
            </div>
            <div
              class="cursor-pointer opacity-50 hover:opacity-100"
              @click="ToDoStore.deleteTask(list.id)"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div v-if="ToDoStore.filterList() == ''" class="text-xl font-bold">
        CANNOT FIND LIST TO DO
      </div>
    </div>
  </main>
</template>
