<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

const router = useRouter()
const authStore = useAuthStore();
if (!authStore.user) {
    router.push('/');
}

</script>
