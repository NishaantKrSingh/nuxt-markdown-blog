<script setup>
const colorMode = useColorMode()
const isHydrated = ref(false)

onMounted(() => {
  isHydrated.value = true
})

// Create a computed model for the switch (true = dark, false = light)
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (val) => {
    colorMode.preference = val ? 'dark' : 'light'
  }
})
</script>

<template>
  <div v-if="isHydrated" class="flex items-center gap-4">
    <USwitch unchecked-icon="i-lucide-sun" checked-icon="i-lucide-moon" color="neutral" id="theme-switch" v-model="isDark" />
  </div>
</template>