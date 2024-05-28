<template>
    <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-16 sm:h-screen md:h-screen">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
                <div class="flex justify-center">
                    <div class="flex items-center">
                        <img class="h-21 mr-2 sm:w-32 md:w-60" src="/logo-onetwo.png" alt="logo" />
                    </div>
                </div>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-6" style="padding-top: 0%">
                    <form class="space-y-4 md:space-y-6" @submit.prevent="SignIn" method="post">
                        <div>
                            <label for="userLogin"
                                class="block mb-2 text-sm font-medium text-gray-900">ชื่อผู้ใช้งาน</label>
                            <input type="text" v-model="userLogin" id="userLogin"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="user.sur" required />
                        </div>
                        <div>
                            <label for="passwordLogin"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
                            <input type="password" v-model="passwordLogin" id="passwordLogin" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required />
                            <span v-if="loginValidation"
                                class="text-red-500 text-sm">ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง</span>
                        </div>
                        <button style="border-radius: 12px; background-color: #00569D" type="submit"
                            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            เข้าสู่ระบบ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores'

const store = useAuthStore()
const userLogin = ref('')
const passwordLogin = ref('')
const loginValidation = ref('')
const router = useRouter()

const SignIn = async () => {
    await store.login(userLogin.value, passwordLogin.value);
    if (store.isLoggedIn) {
        loginValidation.value = false
        console.log('เข้าสู่ระบบสำเร็จ')
        router.push('home')
    } else {
        console.log('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
        loginValidation.value = true
    }
}

</script>