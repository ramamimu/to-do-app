<script>
import CardVue from "../components/Card.vue";
export default {
  components: {
    CardVue,
  },
};
</script>

<template>
  <main>
    <div class="container mx-auto my-10 flex flex-wrap justify-around gap-5">
      <CardVue
        :detailTask="{
          title: 'title',
          date: 'date',
          description: 'description',
          tags: ['tag1', 'tag2'],
          tasks: [
            { id: 1, description: 'task1', completed: false },
            { id: 2, description: 'task2', completed: false },
            { id: 3, description: 'task3', completed: true },
          ],
        }"
      />
      <!-- <div class="text-xl font-bold">CANNOT FIND LIST TO DO</div> -->
    </div>
  </main>
</template>
