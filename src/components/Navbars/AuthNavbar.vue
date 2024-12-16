<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/"
        >
         <img
            src="/logoTE.png"
            alt="Logo" 
            class="h-16 w-auto"
          />
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
         
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <!-- <li class="flex items-center">
            <PagesDropdown />
          </li> -->

          <!-- Home Link -->
          <li class="flex items-center">
            <router-link
              class="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10" />
              </svg>
              Home
            </router-link>
          </li>

          <!-- About Us Link -->
          <!-- <li class="flex items-center">
            <router-link
              class="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              to="/about"
            >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5c3.29 0 5.97 2.19 5.97 5.5 0 1.79-.74 3.42-1.94 4.51M15.56 20H8.44M6.06 14A5.993 5.993 0 0112 4.5M12 20.75h0M15.56 20h0" />
              </svg>
              About Us
            </router-link>
          </li> -->
        
        
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
//import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  // components: {
  //   PagesDropdown,
  // },
};
</script>
