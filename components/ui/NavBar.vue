<script setup>
const colorMode = useColorMode()
const isHydrated = ref(false)

onMounted(() => {
    isHydrated.value = true
})

const logoPath = computed(() => `/images/logo-${colorMode.value}/logo.png`)


</script>

<template>
    <header class="fixed w-full flex justify-between items-center px-4 h-20 md:px-12 ">
        <NuxtLink v-if="isHydrated" href="/">
            <img :src="logoPath" alt="logo" class="h-15">
        </NuxtLink>
        
        <nav>
            <UButton icon="i-lucide-menu" size="xl" color="primary" variant="solid" class="md:hidden" />
            <ul
                class="fixed left-0 right-0 min-h-screen bg-amber-50 dark:bg-gray-900 space-y-4 p-4 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0">
                <li>
                    <NuxtLink class="text-black dark:text-white text-lg" href="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-black dark:text-white text-lg" href="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="text-black dark:text-white text-lg" href="/">Contact</NuxtLink>
                </li>
                <li>
                    <ElementThemeSwitch />
                </li>
            </ul>
        </nav>
    </header>
</template>