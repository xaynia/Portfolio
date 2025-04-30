<!-- pages/contact.vue -->
<template>
  <div class="contact-page">
    <h2>Contact Me</h2>
    <p>Have a question or want to collaborate? Drop me a line!</p>

    <form @submit.prevent="submitForm">
      <div class="form-field">
        <label for="name">Name</label>
        <input v-model="formData.name" type="text" id="name" required />
      </div>

      <div class="form-field">
        <label for="email">Email</label>
        <input v-model="formData.email" type="email" id="email" required />
      </div>

      <div class="form-field">
        <label for="message">Message</label>
        <textarea v-model="formData.message" id="message" required></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  alert(`Submitted:\nName: ${formData.value.name}\nEmail: ${formData.value.email}\nMessage: ${formData.value.message}`)
  // TODO: integrate Netlify forms or use an API endpoint
}
</script>

<style scoped lang="scss">
@use '/assets/scss/variables' as *;

.contact-page {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;

  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
      font-weight: bold;
      margin-bottom: 0.25rem;
    }

    input, textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: $primary;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
