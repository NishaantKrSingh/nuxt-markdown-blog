<script setup>
// const colorMode = useColorMode()
</script>

<template>
    <h2>Under default layout</h2>
    <div>
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference" class="text-gray-900 dark:text-white">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
    <slot />
</template>