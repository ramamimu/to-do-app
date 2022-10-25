<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  data: () => ({
    toDoList: [
      {
        id: 1,
        description:
          "akldnak; jiqwhjidu wefh eaiwlka hilha;h ahlf alif rea rfaehfireifla",
        tags: ["tag111", "tag121", "tag32313"],
        title: "ini adalah title pertama",
      },
      {
        id: 2,
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        tags: ["ta1", "tasag121", "ta3"],
        title: "ini adalah title kedua",
      },
      {
        id: 3,
        description:
          "lorem ipsum doloit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        tags: ["tadg1v1qwe1", "tag1as921", "tag3asx2313"],
        title: "ini adalah title ketiga",
      },
    ],
    tempFormData: {
      id: null,
      title: "",
      description: "",
      tag: "",
      tags: [],
    },
  }),
  methods: {
    checkEnter(e) {
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
    deleteTag(index) {
      this.tempFormData.tags.splice(index, 1);
      // add pop up if tag deleted
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
          @keypress="checkEnter"
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
        <button type="submit" class="m-2 border p-3">add list</button>
      </form>
      <div
        v-for="(list, index) in toDoList"
        :key="list.id"
        class="m-5 w-[550px] cursor-pointer border p-5"
        @click="deleteList(list.id)"
      >
        <p>id: {{ list.id }}</p>
        <h2>title: {{ list.title }}</h2>
        <p>description: {{ list.description }}</p>
        <h4>tags: {{ list.tags }}</h4>
      </div>
    </div>
  </main>
</template>
