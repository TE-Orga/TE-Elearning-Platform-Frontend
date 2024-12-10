<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            class="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p class="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <a href="/auth/register" class="text-blue-500">Register</a>
        </p>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Gérer la connexion
      console.log("Login:", this.email, this.password);
    },
    switchToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
