<template>
  <div class="typo">
    <div class="wrapper">
      <h1 class="title title_big"><strong>Typoyeah</strong></h1>
      <h2 class="title arrow">Pour essayer la typo tape ici</h2>
      <input
        type="text"
        class="search"
        placeholder="Essaye moi"
        v-model="keyword"
      />
    </div>

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

.title {
  margin-bottom: 16px;
  &_big {
    margin-bottom: 64px;
  }
}
.arrow {
  position: relative;
}

.arrow::after {
  content: '';
  display: block;
  position: absolute;
  left: -45px;
  top: 80%;
  transform: rotate(-45deg);
  background-image: url('/img/arrow.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 45px;
  height: 45px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.list {
  width: 100px;
  height: auto;
}
.img_list {
  width: 100%;
}
</style>
