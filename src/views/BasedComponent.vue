<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data() {
    return {
      toDoList: [
        {
          id: new Date().getTime(),
          description:
            "akldnak; jiqwhjidu wefh eaiwlka hilha;h ahlf alif rea rfaehfireifla",
          tags: ["tag111", "tag121", "tag32313"],
          tasks: [
            {
              id: 1,
              description: "task1",
              completed: false,
            },
            {
              id: 2,
              description: "task2",
              completed: false,
            },
            {
              id: 3,
              description: "task3",
              completed: false,
            },
          ],
          title: "ini adalah title pertama",
        },
        {
          id: new Date().getTime() + 2,
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          tags: ["ta1", "tasag121", "ta3"],
          tasks: [
            {
              id: 1,
              description: "task1",
              completed: false,
            },
            {
              id: 2,
              description: "task2",
              completed: false,
            },
            {
              id: 3,
              description: "task3",
              completed: false,
            },
          ],
          title: "ini adalah title kedua",
        },
        {
          id: new Date().getTime() + 6,
          description:
            "lorem ipsum doloit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
          tags: ["tadg1v1qwe1", "tag1as921", "tag3asx2313"],
          tasks: [
            {
              id: 1,
              description: "task1",
              completed: false,
            },
            {
              id: 2,
              description: "task2",
              completed: false,
            },
            {
              id: 3,
              description: "task3",
              completed: false,
            },
          ],
          title: "ini adalah title ketiga",
        },
      ],
      tempFormData: {
        id: null,
        title: "",
        description: "",
        tag: "",
        tags: [],
        task: "",
        tasks: [],
      },
      tagSearch: "",
    };
  },
  methods: {
    checkEnterTags(e) {
      if (
        this.tempFormData.tag != "" &&
        e.keyCode == 13 &&
        !this.tempFormData.tags.includes(this.tempFormData.tag)
      ) {
        this.tempFormData.tags.push(this.tempFormData.tag);
        this.tempFormData.tag = "";
        e.preventDefault();
      }
      // add pop up if array tags is nothing
    },
    checkEnterTask(e) {
      if (
        this.tempFormData.task != "" &&
        e.keyCode == 13 &&
        !this.tempFormData.tasks.includes(this.tempFormData.task)
      ) {
        const tempTask = {
          id: new Date().getTime(),
          description: this.tempFormData.task,
          completed: false,
        };
        this.tempFormData.tasks.push(tempTask);
        this.tempFormData.task = "";
        e.preventDefault();
      }
    },
    preventEnter(e) {
      if (e.keyCode == 13) {
        e.preventDefault();
      }
    },
    addList(e) {
      e.preventDefault();
      this.tempFormData.id = new Date().getTime();
      this.toDoList.push(this.tempFormData);
      this.tempFormData = {
        id: null,
        title: "",
        description: "",
        tag: "",
        tags: [],
      };
    },
    deleteList(id) {
      this.toDoList = this.toDoList.filter((item) => item.id != id);
    },
    editList(id) {
      // muncul laman sendiri dengan v-model sesuai di bawah
      this.tempFormData = this.toDoList.find((item) => item.id == id);
    },
    confirmEdit() {
      // this.toDoList = this.toDoList.map((item) => {
      //   if (item.id == this.tempFormData.id) {
      //     return this.tempFormData;
      //   } else {
      //     return item;
      //   }
      // });
      this.tempFormData = {
        id: null,
        title: "",
        description: "",
        tag: "",
        tags: [],
      };
    },
    deleteTag(index) {
      this.tempFormData.tags.splice(index, 1);
      // add pop up if tag deleted
    },
    filterList() {
      if (this.tagSearch != "") {
        return this.toDoList.filter((item) => {
          return item.tags.includes(this.tagSearch);
        });
      } else {
        return this.toDoList;
      }
    },
  },
  watch: {
    tempFormData() {
      this.toDoList.forEach((item) => {
        console.log(item);
      });
      // console.log(newVal);
    },
  },
};
</script>

<template>
  <main class="border">
    <h1 class="text-center text-4xl font-black">To Do APP</h1>
    <div class="flex flex-col items-center justify-center">
      <form @submit="addList">
        <h2>add task</h2>
        <input
          class="border"
          type="text"
          placeholder="title"
          v-model="tempFormData.title"
          required
          @keypress="preventEnter"
        />
        <input
          class="border"
          type="text"
          placeholder="description"
          v-model="tempFormData.description"
          required
          @keypress="preventEnter"
        />
        <input
          class="border"
          type="text"
          placeholder="tags"
          v-model="tempFormData.tag"
          @keypress="checkEnterTags"
        />
        <input
          class="border"
          type="text"
          placeholder="tasks"
          v-model="tempFormData.task"
          @keypress="checkEnterTask"
        />
        <div class="border">
          <h4>
            tags:
            <span
              class="mx-2 cursor-pointer bg-gray-300"
              v-for="(assignTag, index) in tempFormData.tags"
              :key="assignTag"
              @click="deleteTag(index)"
            >
              {{ assignTag }}
            </span>
          </h4>
        </div>
        <div class="border">
          <h4>tasks:</h4>
          <div v-for="task in tempFormData.tasks" :key="task.id">
            <input type="checkbox" v-model="task.completed" />
            <p>{{ task.description }}</p>
          </div>
        </div>
        <button type="submit" class="m-2 border p-3">add list</button>
        <button class="m-2 border p-3" @click="confirmEdit">
          confirm edit
        </button>
      </form>
      <input
        type="text"
        placeholder="search me by tags"
        v-model="tagSearch"
        class="border"
      />
      <div
        v-for="list in filterList()"
        :key="list.id"
        class="m-5 w-[550px] border p-5"
      >
        <p>id: {{ list.id }}</p>
        <h2>title: {{ list.title }}</h2>
        <p>description: {{ list.description }}</p>
        <h4>tags: {{ list.tags }}</h4>
        <h4>tasks: {{ list.tasks }}</h4>

        <br />
        <button class="mr-3 bg-blue-300 p-3" @click="editList(list.id)">
          ini edit
        </button>
        <button class="bg-green-500 p-3" @click="deleteList(list.id)">
          ini hapus
        </button>
      </div>
    </div>
  </main>
</template>
