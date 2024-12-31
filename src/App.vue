<template>
<div class="bg-[#111827] min-h-screen">
    <!-- wrap component in suspense to handle loading -->
    <Suspense>
        <template #default>
            <!-- wrap all components inside a single root element -->
            <div> 
                <NavBar />
                <HeroSection />
                <CoursSection />
                <AboutSection />
                <ExperienceAndSkill />
                <LatestProjSection />
                <ContactSection />
               <TestimonialsSection />
               <Footer />
               <BackToTop />
            </div>
        </template>
        <template #fallback>
            <div class="flex justify-center items-center min-h-screen">
                <loadingSpinner />
            </div>
        </template>
    </Suspense>
</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
//Import Components Asynchronously
const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(()=>import('@/components/HeroSection.vue'))
const CoursSection = defineAsyncComponent(()=>import('@/components/CoursSection.vue'))
const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'))
const ExperienceAndSkill = defineAsyncComponent(()=>import('@/components/ExperienceAndSkill.vue'))
const LatestProjSection = defineAsyncComponent(()=>import('@/components/LatestProjSection.vue'))
const ContactSection = defineAsyncComponent(()=>import('@/components/ContactSection.vue'))
const TestimonialsSection = defineAsyncComponent(()=>import('@/components/TestimonialsSection.vue'))
const Footer = defineAsyncComponent(()=>import('@/components/Footer.vue'))
const BackToTop = defineAsyncComponent(()=>import('@/components/BackToTop.vue'))
import loadingSpinner from '@/components/loadingSpinner.vue';
</script>

