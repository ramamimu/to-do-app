<script>
import { db } from "../src/firebase/app";
import { collection, getDocs } from "firebase/firestore";
import HeaderVue from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
  },
  data() {
    return {
      db: null,
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "to-do"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  },
};
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <RouterView />
</template>
