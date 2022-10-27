<script>
import { db } from "../src/firebase/app";
import { collection, getDocs } from "firebase/firestore";
import HeaderVue from "./components/Header.vue";
import { useToDoStore } from "./stores/toDoList";

export default {
  name: "App",
  components: {
    HeaderVue,
  },
  setup() {
    const ToDoStore = useToDoStore();
    return {
      ToDoStore,
    };
  },
  data() {
    return {
      db: null,
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "to-do"));
    let tempLists = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      tempLists.push(doc.data());
    });
    this.ToDoStore.setList(tempLists);
    console.log(this.ToDoStore.todos);
  },
};
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <RouterView />
</template>
