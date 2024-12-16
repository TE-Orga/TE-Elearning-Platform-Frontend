<script setup>
import { ref } from 'vue';

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  privacyPolicies: false,
});

const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);

const errors = ref({
  username: null,
  email: null,
  password: null,
  confirmPassword: null,
  privacyPolicies: null,
});

// Validation et gestion des erreurs
const validateForm = () => {
  let isValid = true;

  // Vérification du champ username
  if (!form.value.username.trim()) {
    errors.value.username = 'Username is required.';
    isValid = false;
  } else {
    errors.value.username = null;
  }

  // Vérification du champ email
  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format.';
    isValid = false;
  } else {
    errors.value.email = null;
  }

  // Vérification du champ password
  if (!form.value.password.trim()) {
    errors.value.password = 'Password is required.';
    isValid = false;
  } else {
    errors.value.password = null;
  }

  // Vérification du champ confirmPassword
  if (!form.value.confirmPassword.trim()) {
    errors.value.confirmPassword = 'Confirm Password is required.';
    isValid = false;
  } else if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match.';
    isValid = false;
  } else {
    errors.value.confirmPassword = null;
  }

  // Vérification de l'accord sur les conditions
  if (!form.value.privacyPolicies) {
    errors.value.privacyPolicies = 'You must agree to the privacy policy.';
    isValid = false;
  } else {
    errors.value.privacyPolicies = null;
  }

  return isValid;
};

// Gestion de la soumission
const handleSubmit = () => {
  if (validateForm()) {
    console.log('Form submitted:', form.value);
    // Logique supplémentaire après validation réussie
  } else {
    console.log('Form validation failed:', errors.value);
  }
};
</script>

<template>
<!-- 3 card visitor  -->
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div class="flex justify-center mb-4">
          <i class="fas fa-user text-green-500 text-4xl"></i>
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4">You are New Visitor</h2>
        <p class="text-center mb-4">Please Create Your New Account.</p>
        <form @submit.prevent="handleSubmit">
          <!-- Username -->
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              v-model="form.username"
              type="text"
              id="username"
              placeholder="Johndoe"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p v-if="errors.username" class="text-sm text-red-600 mt-1">{{ errors.username }}</p>
          </div>
      
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p v-if="errors.email" class="text-sm text-red-600 mt-1">{{ errors.email }}</p>
          </div>
      
          <!-- Password -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <div class="relative">
        <input
          v-model="form.password"
          :type="isPasswordVisible ? 'text' : 'password'"
          id="password"
          placeholder="············"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          @click="isPasswordVisible = !isPasswordVisible"
          class="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500"
        >
          {{ isPasswordVisible ? 'Hide' : 'Show' }}
        </button>
      </div>
      <p v-if="errors.password" class="text-sm text-red-600 mt-1">{{ errors.password }}</p>
          </div>
      
          <!-- Confirm Password -->
          <div class="mb-4">
      <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
      <div class="relative">
        <input
          v-model="form.confirmPassword"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          id="confirmPassword"
          placeholder="············"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="button"
          @click="isConfirmPasswordVisible = !isConfirmPasswordVisible"
          class="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-500"
        >
          {{ isConfirmPasswordVisible ? 'Hide' : 'Show' }}
        </button>
      </div>
      <p v-if="errors.confirmPassword" class="text-sm text-red-600 mt-1">{{ errors.confirmPassword }}</p>
          </div>
      
          <!-- Privacy Policy -->
          <div class="flex items-center mb-6">
      <input
        type="checkbox"
        id="privacy-policy"
        v-model="form.privacyPolicies"
        class="h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
      <label for="privacy-policy" class="ml-2 text-sm text-gray-600">
        I agree to
        <a href="#" class="text-indigo-600">privacy policy & terms</a>
      </label>
          </div>
          <p v-if="errors.privacyPolicies" class="text-sm text-red-600 mb-4">{{ errors.privacyPolicies }}</p>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign up
          </button>
        </form>
      <!-- Already have an account? -->
      <div class="mt-4 text-center">
        <span class="text-sm text-gray-600">Already have an account?</span>
        <router-link to="/auth/visitorlogin" class="text-indigo-600 ml-1 text-sm">Sign in instead</router-link>
      </div> 
      </div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
</style>