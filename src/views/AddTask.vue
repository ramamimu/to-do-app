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
    return {
      tempFormData: {
        id: null,
        title: "",
        description: "",
        tags: [],
        tasks: [],
      },
      task: "",
      tag: "",
    };
  },
  methods: {
    checkEnterTags(e) {
      if (this.tag != "" && e.keyCode == 13) {
        if (
          this.tempFormData.tags &&
          !this.tempFormData.tags.includes(this.tag)
        )
          this.tempFormData.tags.push(this.tag);
        this.tag = "";
        e.preventDefault();
      }
      // add pop up if array tags is nothing
    },
    checkEnterTask(e) {
      if (this.task != "" && e.keyCode == 13) {
        const tempTask = {
          id: new Date().getTime(),
          task: this.task,
          completed: false,
        };
        try {
          if (
            this.tempFormData.tasks &&
            !this.tempFormData.tasks.includes(this.task)
          )
            this.tempFormData.tasks.push(tempTask);
        } catch (error) {
          console.log(error);
        } finally {
          this.task = "";
          e.preventDefault();
        }
      }
    },
    preventEnter(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
      }
    },
    addList(e) {
      e.preventDefault();
      this.tempFormData.id = new Date().getTime().toString();
      this.ToDoStore.addTask(this.tempFormData);
      this.tempFormData = {
        id: null,
        title: "",
        description: "",
        tags: [],
        tasks: [],
      };
      this.tag = "";
      this.task = "";

      console.log(this.ToDoStore.todos);
    },
    deleteTag(tag) {
      this.tempFormData.tags.splice(this.tempFormData.tags.indexOf(tag), 1);
      // add pop up if tag deleted
    },
    deleteList(id) {
      this.tempFormData.tasks = this.tempFormData.tasks.filter((item) => {
        return item.id != id;
      });
    },
  },
};
</script>

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
            required=""
            placeholder="title"
            v-model="tempFormData.title"
            @keypress="preventEnter"
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
            v-model="tempFormData.description"
            required
            @keypress="preventEnter"
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
            v-model="tag"
            @keypress="checkEnterTags"
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
            v-model="task"
            autocomplete="off"
            @keypress="checkEnterTask"
          />
        </div>
        <button
          type="submit"
          class="mt-10 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          @click="addList"
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
          v-for="assignTag in tempFormData.tags"
          :key="assignTag"
          @click="deleteTag(assignTag)"
        >
          #{{ assignTag }}
        </span>
      </p>
    </div>
    <div class="border p-10">
      <h4>tasks:</h4>
      <div
        class="mr-4 flex gap-3 py-2"
        v-for="task in tempFormData.tasks"
        :key="task.id"
      >
        <svg
          class="h-6 w-6 cursor-pointer opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="deleteList(task.id)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
        <input type="checkbox" v-model="task.completed" />
        <p>{{ task.task }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>
