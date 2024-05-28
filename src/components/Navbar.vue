<template>
    <nav class="fixed top-0 z-40 w-full bg-white border-b border-gray-200">
        <div class="px-3 py-2 lg:px-5 lg:pl-3">

            <div class="flex items-center justify-between">
                <div class="flex justify-start">
                    <div class="text-center">
                        <button aria-controls="drawer-navigation"
                            class="inline-flex items-center p-2 pt-0 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            data-drawer-show="drawer-navigation" data-drawer-target="drawer-navigation" type="button">
                            <Icon height="24" icon="bi:list" width="24" />
                        </button>
                    </div>
                    <div class="flex-row flex">
                        <!-- <a class="flex items-center ml-8" href="/pocoManage/dashboard"> -->
                        <img alt="12Trading Logo" class="h-8 mr-3" src="/logo-onetwo.png" />
                        <span class="self-center text-m font-semibold whitespace-nowrap">Online Manage</span>
                        <!-- </a> -->
                    </div>

                </div>
                <div class="flex items-center">
                    <div class="flex items-center ml-3">
                        <div>
                            <button aria-expanded="false"
                                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                                data-dropdown-toggle="dropdown-user" type="button">
                                <!-- <span class="sr-only">Open user menu</span> -->
                                <img alt="user photo" class="w-8 h-8 rounded-full" src="/user.png" />
                            </button>
                        </div>
                        <div id="dropdown-user"
                            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                            <div class="px-4 py-3" role="none">
                                <span class="block text-sm text-gray-900 dark:text-white text-center">
                                    <div v-if="user">{{ user.infor.fullname }}</div>
                                </span>
                                <span class="block text-sm text-gray-500 truncate text-center">{{ user.infor.company }}</span>
                            </div>
                            <!-- <ul class="py-1" role="none">
                                <li>
                                    <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/logout"
                                        role="menuitem">ออกจากระบบ</a>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>


<script setup>
import { onMounted } from 'vue'
import { initDropdowns } from 'flowbite'
import { useAuthStore } from '../stores'
import { Icon } from '@iconify/vue'

onMounted(() => {
    initDropdowns();
});
const authStore = useAuthStore()
const user = authStore

</script>