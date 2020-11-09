<template>
    <div class="typo">
    <input
      type="text"
      name="search"
      id="search"
      class="search"
      placeholder="Prénom"
      v-model="keyword"
    />
    <hr />
    <ul class="grid">
      <li v-for="font in people" :key="font.letter">
        <img :src="font.img" :alt="font.letter" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import data from '@/inc/data'

export default defineComponent({
  name: 'typo',
  setup() {
    const keyword = ref('')
    const filtered= computed(()=>
      data.typo.filter(p=> 
      p.letter.toLowerCase().includes(keyword.value.toLowerCase())

     )
    )
    return {
      people: filtered,
      keyword
    }
  },
})
</script>

<style lang="scss">

</style>
