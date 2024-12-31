<template>
  <div>
    <Navbar />
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
            class="absolute top-0 w-full h-full bg-blueGray-200"
        ></div>
        <router-view />
        <Footer-small absolute />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "../components/Navbars/AuthNavbar.vue";
import FooterSmall from "../components/Footers/FooterSmall.vue";
//import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
  name: "Auth",
  components: {
    Navbar,
    FooterSmall,
  },
};
</script>
