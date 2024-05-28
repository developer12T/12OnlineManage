<template>
    <aside id="default-sidebar" aria-label="Sidebar"
        class="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">

            <div>
                <ul class="space-y-2 font-medium">
                    <li>
                        <div class="text-center align-middle">
                            <button aria-controls="drawer-navigation"
                                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                data-drawer-show="drawer-navigation" data-drawer-target="drawer-navigation"
                                type="button">
                                <Icon height="24" icon="bi:list" width="24" />
                            </button>
                        </div>
                    </li>
                    <li class="mt-2">
                        <router-link :class="{
                            'flex justify-center rounded-lg flex-col items-center p-2 active:text-blue-500 group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'dashboard',
                            'flex items-center p-2 flex-col justify-center active:text-blue-500 rounded-lg group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'dashboard',
                        }" aria-current="page" to="/onlineManage/dashboard" @click="handlePage('dashboard')">
                            <Icon class="icon" height="24" icon="line-md:home-md" width="24" />
                            <span style="font-size: 10px">หน้าหลัก</span>
                        </router-link>
                    </li>

                    <li>
                        <a :class="{
                            'flex flex-col items-center cursor-pointer w-full p-2 text-base text-blue-700 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'receipt' || pageName === 'erp',
                            'flex flex-col  items-center w-full p-2 cursor-pointer text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'receipt' && pageName !== 'erp',
                        }" aria-controls="dropdownStock2" data-collapse-toggle="dropdownStock2" type="button">
                            <Icon class="icon" height="24" icon="solar:bill-check-broken" width="24" />
                            <span class="flex-1 text-xs text-center whitespace-nowrap">รายการ</span>
                            <Icon height="16" icon="mingcute:down-fill" width="16" />
                        </a>
                        <ul id="dropdownStock2" class="py-2 space-y-2">
                            <li>
                                <router-link :class="{
                            'flex justify-center rounded-lg flex-col items-center p-2 active:text-blue-500 group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'receipt',
                            'flex items-center p-2 flex-col justify-center active:text-blue-500 rounded-lg group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'receipt',
                        }" aria-current="page" to="/onlineManage/order/reciept" @click="handlePage('receipt')">
                                    <Icon class="icon" height="24" icon="ion:receipt-outline" width="24" />
                                    <span style="font-size: 10px">ใบเสร็จ</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :class="{
                            'flex justify-center rounded-lg flex-col items-center p-2 active:text-blue-500 group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'preparem3',
                            'flex items-center p-2 flex-col justify-center active:text-blue-500 rounded-lg group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'preparem3',
                        }" aria-current="page" to="/onlineManage/order/erp" @click="handlePage('preparem3')">
                                    <Icon class="icon" height="24" icon="tabler:stack-push" width="24" />
                                    <span style="font-size: 10px">ERP</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a :class="{
                            'flex flex-col items-center cursor-pointer w-full p-2 text-base text-blue-700 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'stock/zort' || pageName === 'stock/erp',
                            'flex flex-col  items-center w-full p-2 cursor-pointer text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'stock/zort' && pageName !== 'stock/erp',
                        }" aria-controls="dropdownStock3" data-collapse-toggle="dropdownStock3" type="button"
                            @click="rotate2(activesIcon2)">
                            <Icon class="icon mb-1" height="24" icon="fluent-mdl2:product-variant" width="24" />
                            <span class="flex-1 text-xs text-center whitespace-nowrap">สต็อก</span>
                            <Icon height="16" icon="mingcute:down-fill" width="16" />
                        </a>
                        <ul id="dropdownStock3" class="py-2 space-y-2">
                            <li>
                                <router-link :class="{
                            'flex justify-center rounded-lg flex-col items-center p-2 active:text-blue-500 group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'stock/zort',
                            'flex items-center p-2 flex-col justify-center active:text-blue-500 rounded-lg group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'stock/zort',
                        }" aria-current="page" to="/onlineManage/stock/zort" @click="handlePage('stock/zort')">
                                    <Icon class="icon mb-1" height="24"
                                        icon="streamline:interface-download-box-1-arrow-box-down-download-internet-network-server-upload"
                                        width="24" />
                                    <span style="font-size: 10px">Zort</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :class="{
                            'flex justify-center rounded-lg flex-col items-center p-2 active:text-blue-500 group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'stock/erp',
                            'flex items-center p-2 flex-col justify-center active:text-blue-500 rounded-lg group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'stock/erp',
                        }" aria-current="page" to="/onlineManage/stock/erp" @click="handlePage('stock/erp')">
                                    <Icon class="icon mb-1" height="24"
                                        icon="streamline:interface-upload-box-1-arrow-box-download-internet-network-server-up-upload"
                                        width="24" />
                                    <span style="font-size: 10px">ERP</span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <a class="flex flex-col justify-center items-center p-2 text-gray-700 hover:bg-gray-100" href="/logout"
                    role="menuitem">
                    <Icon :horizontalFlip="true" class="icon" height="24" icon="majesticons:door-exit" width="24" />
                    <span style="font-size: 10px">ออกระบบ</span>
                </a>
            </div>

        </div>
    </aside>

    <!--  full sidebar-->
    <div id="drawer-navigation" aria-labelledby="drawer-navigation-label"
        class="fixed top-0 left-0 pt-2 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        tabindex="-1">
        <div class="flex flex-col justify-between h-full">
            <div class=" pt-0">
                <div class="flex flex-row justify-between">
                    <a aria-controls="drawer-navigation" class="flex cursor-pointer items-center"
                        data-drawer-hide="drawer-navigation">
                        <img alt="12Trading Logo" class="h-8 mr-3" src="/logo-onetwo.png" />
                        <span class="self-center text-m font-medium whitespace-nowrap dark:text-white">12Trading</span>
                    </a>
                    <button aria-controls="drawer-navigation"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-drawer-hide="drawer-navigation" type="button">
                        <Icon height="24" icon="bi:list" width="24" />
                        <span class="sr-only">Close menu</span>
                    </button>
                </div>

                <div class="py-4 overflow-y-auto flex flex-col">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <router-link :class="{
                            'flex items-center p-2  group text-blue-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName === 'dashboard',
                            'flex items-center p-2  group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100':
                                pageName !== 'dashboard',
                        }" aria-current="page" to="/onlineManage/dashboard" @click="handlePage('dashboard')">
                                <Icon class="icon-right" height="24" icon="line-md:home-md" width="24" />
                                <span class="ml-3 icon-right">หน้าหลัก</span>
                            </router-link>
                        </li>

                        <li>
                            <a :class="{
                            'flex cursor-pointer items-center w-full p-2  text-base text-blue-600 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'receipt' || pageName === 'erp',
                            'flex cursor-pointer items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'receipt' && pageName !== 'erp',
                        }" aria-controls="dropdownSale" data-collapse-toggle="dropdownSale" type="button"
                                @click="rotate(activesIcon)">
                                <Icon class="icon-right" height="24" icon="solar:bill-check-broken" width="24" />
                                <span class="ml-3 icon-right">รายการขาย</span>
                                <Icon :class="{
                            'ml-auto ': activesIcon === 'down',
                            'ml-auto rotate-90': activesIcon === 'up',
                        }" height="24" icon="mingcute:down-fill" width="24" />
                            </a>
                            <ul id="dropdownSale" class="py-2 space-y-2 hidden">
                                <li>
                                    <router-link :class="{
                            'flex items-center w-full p-2 text-blue-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'receipt',
                            'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'receipt',
                        }" aria-current="page" to="/onlineManage/order/reciept" @click="handlePage('receipt')">
                                        <Icon class="icon mr-2" height="24" icon="ion:receipt-outline" width="24" />
                                        พิมพ์ใบเสร็จ
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :class="{
                            'flex items-center w-full p-2 text-blue-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'erp',
                            'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'erp',
                        }" aria-current="page" to="/onlineManage/order/erp" @click="handlePage('erp')">
                                        <Icon class="icon mr-2" height="24" icon="tabler:stack-push" width="24" />
                                        นำเข้าระบบ ERP
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a :class="{
                            'flex cursor-pointer items-center w-full p-2  text-base text-blue-600 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'stock/zort' || pageName === 'stock/erp',
                            'flex cursor-pointer items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'stock/zort' && pageName !== 'stock/erp',
                        }" aria-controls="dropdownStock" data-collapse-toggle="dropdownStock" type="button"
                                @click="rotate2(activesIcon2)">
                                <Icon class="icon-right" height="24" icon="fluent-mdl2:product-variant" width="24" />
                                <span class="ml-3 icon-right">สต็อก</span>
                                <Icon :class="{
                            'ml-auto ': activesIcon2 === 'down',
                            'ml-auto rotate-90': activesIcon2 === 'up',
                        }" height="24" icon="mingcute:down-fill" width="24" />
                            </a>
                            <ul id="dropdownStock" class="py-2 space-y-2 hidden">
                                <li>
                                    <router-link :class="{
                            'flex items-center w-full p-2 text-blue-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'stock/zort',
                            'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'stock/zort',
                        }" aria-current="page" to="/onlineManage/stock/zort" @click="handlePage('stock/zort')">
                                        <Icon class="icon mr-2" height="24"
                                            icon="streamline:interface-download-box-1-arrow-box-down-download-internet-network-server-upload"
                                            width="24" />
                                        Zort
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :class="{
                            'flex items-center w-full p-2 text-blue-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName === 'stock/erp',
                            'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700':
                                pageName !== 'stock/erp',
                        }" aria-current="page" to="/onlineManage/stock/erp" @click="handlePage('stock/erp')">
                                        <Icon class="icon mr-2" height="24"
                                            icon="streamline:interface-upload-box-1-arrow-box-download-internet-network-server-up-upload"
                                            width="24" />
                                        ERP
                                    </router-link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <a class="flex items-center p-2  group text-gray-800-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-100"
                    href="/logout" role="menuitem">
                    <Icon :horizontalFlip="true" class="icon-right" height="24" icon="majesticons:door-exit"
                        width="24" />
                    <span class="ml-3 icon-right">ออกจากระบบ</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initCollapses, initDrawers } from "flowbite";
import { Icon } from "@iconify/vue";
import { useUtilityStore } from "../stores";


const pageStore = useUtilityStore();
const pageName = ref("dashboard");

const activesIcon = ref("up");
const activesIcon2 = ref("up");

// const pageName2 = JSON.parse(localStorage.getItem("pocoPage"))

onMounted(() => {
    initCollapses();
    initDrawers();
});

const pageName2 = localStorage.getItem("pocoPage" || "");
if (pageName2 === null) {
} else {
    pageName.value = pageName2;
}
const handlePage = async (pageNames) => {
    pageName.value = pageNames;
    pageStore.setPage(pageNames);
};

const rotate = (act) => {
    if (act === "down") {
        activesIcon.value = "up";
    } else if (act === "up") {
        activesIcon.value = "down";
    }
};

const rotate2 = (act) => {
    if (act === "down") {
        activesIcon2.value = "up";
    } else if (act === "up") {
        activesIcon2.value = "down";
    }
};

</script>
<style scoped>
a:hover .icon {
    transform: scale(1.2);
    transition: transform 0.3s ease;
}

a:hover .icon-right {
    transform: translateX(10px);
    transition: transform 0.3s ease;
}

.icon-right {
    transition: transform 0.3s ease;
}

.rotate-icon {
    transition: transform 0.3s ease;
}

.rotate-icon.rotate {
    transform: rotate(90deg);
}
</style>