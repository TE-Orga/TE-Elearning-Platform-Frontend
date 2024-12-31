<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative',
    ]"
  >
    <div class="container mx-auto px-4">
      <hr class="mb-6 border-b-1 border-blueGray-600" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
          >
            Copyright © {{ date }}
            <a
              href="https://www.creative-tim.com?ref=vn-footer-small"
              class="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
            >
              TE connectivity
            </a>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
             <!-- Facebook Icon -->
            <li class="px-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                class="text-white hover:text-blueGray-300 text-lg"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>

            <!-- Instagram Icon -->
            <li class="px-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                class="text-white hover:text-blueGray-300 text-lg"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>

            <!-- WhatsApp Icon -->
            <li class="px-3">
              <a
                href="https://wa.me/0000000000"
                target="_blank"
                class="text-white hover:text-blueGray-300 text-lg"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>

             <!-- Twitter Icon -->
            <li class="px-3">
              <a
                href="https://www.twitter.com"
                target="_blank"
                class="text-white hover:text-blueGray-300 text-lg"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
