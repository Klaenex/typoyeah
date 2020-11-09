<template>
  <div class="typo">
    <h1 class="title title_big"><strong>Typoyeah</strong></h1>
    <h2 class="title">Pour essayer la typo tape ici</h2>
    <input
      type="text"
      class="search"
      placeholder="Essaye moi"
      v-model="keyword"
    />
    <ul class="grid">
      <li class="list" v-for="list in filtered" :key="list.id">
        <img class="img_list" :src="'img/' + list + '.png'" :alt="list.id" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'typo',
  setup() {
    const keyword = ref('')

    const str = keyword.value.substr(keyword.value.length - 1)
    let table = []
    const tab = computed(() => keyword.value.substr(keyword.value.length - 1))
    const filtered = computed(() => keyword.value.split(''))

    return {
      keyword,
      str,
      filtered,
      table,
      tab,
    }
  },
})
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}
.list {
  width: 200px;
  height: auto;
}
.img_list {
  width: 100%;
}
</style>
