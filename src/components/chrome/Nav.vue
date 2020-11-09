<template>
  <div class="nav" :class="{ 'is-open': isOpen }">
    <div class="nav__trigger" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ol class="nav__links">
      <li>
        <router-link to="/trombi">Trombi</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ChromeNav',
  setup() {
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    // Bonus : close the nav when the route path changes
    const route = useRoute()

    watch(
      () => route.path,
      () => {
        isOpen.value = false
      }
    )

    return {
      isOpen,
      toggle,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
