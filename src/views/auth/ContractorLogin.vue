<template>
  <!-- Card 2 - Contractor -->
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <div class="flex justify-center mb-4">
      <i class="fas fa-hard-hat text-yellow-500 text-4xl"></i>
    </div>
    <h2 class="text-2xl font-semibold text-center mb-4">Contractor Login</h2>
    <p class="text-center mb-4">Sign in to access contractor tools.</p>
    <form @submit.prevent="handleLogin">
      <!-- email -->
      <div class="mb-4">
        <label for="email-contractor" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email-contractor"
          v-model="form.email"
          @blur="validateEmail"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="contractor@example.com"
        />
        <!-- Message d'erreur pour l'email -->
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
      </div>
      <!-- password -->
      <div class="mb-4">
        <label for="password-contractor" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password-contractor"
          v-model="form.password"
          @blur="validatePassword"
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="********"
        />
        <!-- Message d'erreur pour le mot de passe -->
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
      </div>
      <div class="flex justify-between items-center mb-4">
        <label class="flex items-center">
          <input type="checkbox" v-model="form.remember" class="mr-2" />
          Remember me
        </label>
        <a href="#" class="text-blue-600 text-sm">Forgot Password?</a>
      </div>
      <!-- submit button -->
      <button
        type="submit"
        class="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
      >
        Login
      </button>
      <!-- need to register first -->
      <div class="mt-4 text-center">
        <span class="text-sm text-gray-600">New on our platform?</span>
        <router-link to="/auth/contractorgister" class="text-indigo-600 ml-1 text-sm">Create an account</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Données du formulaire
const form = ref({
  email: '',
  password: '',
  remember: false,
});

// Erreurs de validation
const errors = ref({
  email: '',
  password: '',
});

// Fonction pour valider l'email
const validateEmail = () => {
  if (!form.value.email) {
    errors.value.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email address.';
  } else {
    errors.value.email = '';
  }
};

// Fonction pour valider le mot de passe
const validatePassword = () => {
  if (!form.value.password) {
    errors.value.password = 'Password is required.';
  } else {
    errors.value.password = '';
  }
};

// Gestion de la soumission du formulaire
const handleLogin = () => {
  validateEmail();
  validatePassword();

  // Vérifier si des erreurs existent
  if (!errors.value.email && !errors.value.password) {
    console.log('Login Data:', form.value);
    // Ajouter la logique de connexion ici
  }
};
</script>

<style>
/* Optionnel : ajoutez des styles globaux si nécessaire */
</style>
