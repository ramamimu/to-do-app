import { ref } from "vue";
import { defineStore } from "pinia";

export const useToDoStore = defineStore("todo", () => {
  const todos = ref([
    {
      id: new Date().getTime() + 2,
      description:
        "akldnak; wed wed wedwedewdwedewd gwedguoewghfuwebduwe8dwgejh iw fwiuf eihfi wuif weuif h dwedewdewdwedwedeiw hjwe luhfeuwgfuyekw guy jiqwhjasdkjnas wed we dewdwedwedwed wedw d wedwede jh dasjdjkha sjdhas jdh jlaksh dkljashjldkh khidu wefh eaiwlka hilha;h ahlf alif rea rfaehfireifla",
      tags: ["tag111", "tag121", "tag32313"],
      tasks: [
        {
          id: 1,
          task: "task1",
          completed: false,
        },
        {
          id: 2,
          task: "task2",
          completed: false,
        },
        {
          id: 3,
          task: "task3",
          completed: false,
        },
      ],
      title: "ini adalah title pertama",
    },
    {
      id: new Date().getTime() + 5,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      tags: ["ta1", "tasag121", "ta3"],
      tasks: [
        {
          id: 1,
          task: "task1",
          completed: false,
        },
        {
          id: 2,
          task: "task2",
          completed: false,
        },
        {
          id: 3,
          task: "task3",
          completed: false,
        },
      ],
      title: "ini adalah title kedua",
    },
    {
      id: new Date().getTime() + 11,
      description:
        "lorem ipsum doloit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      tags: ["tadg1v1qwe1", "tag1as921", "tag3asx2313"],
      tasks: [
        {
          id: 1,
          task: "task1",
          completed: false,
        },
        {
          id: 2,
          task: "task2",
          completed: false,
        },
        {
          id: 3,
          task: "task3",
          completed: false,
        },
      ],
      title: "ini adalah title ketiga",
    },
  ]);

  const search = ref("");

  const addTodo = (todo) => {
    todos.value.push(todo);
  };
  return { todos, search, addTodo };
});
