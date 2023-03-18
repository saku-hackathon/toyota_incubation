<template>
    <div>
      <p>Click on a project to enter a quantity</p>
      <ul>
        <li v-for="(project, index) in projects" :key="index">
          <a href="#" @click.prevent="showModal(project)">{{ project.name }}</a>
        </li>
      </ul>
  
      <Modal v-if="showingModal" @close="closeModal">
        <h3>Enter Quantity for {{ selectedProject.name }}</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" v-model="quantity" required>
          </div>
  
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'ProjectList',
  components: { Modal },
  props: {
      projects: { type: Array, required: true },
  },
  data() {
      return {
      showingModal: false,
      selectedProject: null,
      quantity: null,
      }
  },
  methods: {
      showModal(project) {
      this.selectedProject = project
      this.showingModal = true
      },
      closeModal() {
      this.showingModal = false
      },
      submitForm() {
      // Execute RPC method on the shibuya chain here using this.selectedProject.contract and this.quantity
      this.showingModal = false
      },
  },
}
</script>
