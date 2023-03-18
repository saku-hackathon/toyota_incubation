<template>
  <div class="tab">
    <h1>{{ tabName }}</h1>
    <div v-for="list in lists" :key="list.name">
      <router-link :to="{ name: 'Project', params: { projectName: list.name } }">{{ list.label }}</router-link>
    </div>
  </div>
  <ProjectList :projects="projects"/>
</template>

<script>
import ProjectList from '@/components/ProjectList.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',
  props: ['tabName'],
  data() {
    return {
      projects: [
        { name: 'Project 1', receive_address: '0x1234567890' },
        { name: 'Project 2', receive_address: '0x0987654321' },
        { name: 'Project 3', receive_address: '0xabcdef1234' },
      ],
      contract_address: "0x67aB4032a879E4a13860fa3b1050e09d57450FdA"
    }
  },
  components: {
    ProjectList,
  },
}
</script>

<style>
.tab {
  padding: 20px;
}
</style>