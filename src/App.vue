<script>
import { db } from "../src/firebase/app";
import { collection, getDocs } from "firebase/firestore";
import HeaderVue from "./components/Header.vue";
import ToastVue from "./components/Toast.vue";
import { useToDoStore } from "./stores/toDoList";
import { useToast } from "./stores/toast";

export default {
  name: "App",
  components: {
    HeaderVue,
    ToastVue,
  },
  setup() {
    const ToDoStore = useToDoStore();
    const ToastStore = useToast();
    return {
      ToDoStore,
      ToastStore,
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

  <div class="relative">
    <ToastVue v-if="ToastStore.toast.status" />
  </div>

  <RouterView />
</template>
