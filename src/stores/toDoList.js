import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { db } from "../firebase/app";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

export const useToDoStore = defineStore("todo", () => {
  const todos = ref([]);

  const search = ref("");

  const addTask = async (todo) => {
    todos.value.push(todo);
    await setDoc(doc(db, "to-do", todo.id), todo)
      .then(() => {
        console.log("successfully delete!");
      })
      .catch((error) => {
        console.error("Error delete document: ", error);
      });
  };

  const deleteTask = async (id) => {
    todos.value = todos.value.filter((item) => {
      return item.id != id;
    });
    await deleteDoc(doc(db, "to-do", id.toString()))
      .then(() => {
        console.log("Document successfully delete!");
      })
      .catch((error) => {
        console.error("Error delete document: ", error);
      });
  };

  const editTask = async (id, data) => {
    const index = todos.value.findIndex((item) => {
      return item.id == id;
    });
    todos.value[index] = data;
    await setDoc(doc(db, "to-do", todos.value[index].id), data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const filterList = () => {
    const searchTag = search.value;
    if (searchTag != "") {
      return todos.value.filter((item) => {
        return item.tags.includes(searchTag);
      });
    } else {
      return todos.value;
    }
  };

  const setList = (list) => {
    todos.value = list;
  };

  watch(todos.value, (state) => {
    // persist the whole state to the local storage whenever it changes
    console.log("pinia triggered", state);
  });

  watch(todos, (state) => {
    // persist the whole state to the local storage whenever it changes
    console.log("pinia triggered with no val", state);
  });

  return { todos, search, addTask, filterList, deleteTask, editTask, setList };
});
