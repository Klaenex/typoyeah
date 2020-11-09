<template>
  <div class="typo">
    <input
      type="text"
      name="search"
      id="search"
      class="search"
      placeholder="Essaye moi"
      v-model="keyword"
    />

    <ul class="grid">
      <li class="list" v-for="font in keyword" :key="font" :class="{ font }">
        <div>{{ keyword }}</div>
        <div>{{ filtered }}</div>
        <div>{{ tab.value }}</div>
        <div>{{table}}</div>

        <!-- <img class="img_list" :src="require( filtered )"/>    -->
        <!-- <img
          class="img_list"
          :src="'img/' + filtered + '.png'"
          :alt="font.letter"
        /> -->
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

//import data from '@/inc/data'
export default defineComponent({
  name: 'typo',
  setup() {
    const keyword = ref('')
    const str = keyword.value.substr(keyword.value.length - 1)

    console.log(keyword.value)
    console.log(typeof keyword.value)
    console.log(str)
    let table=[];
    const tab=computed(
      ()=>
      table.push(keyword.value.substr(keyword.value.length - 1))
    );

    const filtered = computed(
      () => 
      keyword.value.substr(keyword.value.length - 1)
      

      //   // data.typo.filter(p=> p.letter.toLowerCase().includes(keyword.value.toLowerCase()))

      //   //data.typo.letter=='A'
      //   //data.typo.filter(f => f.letter.toLowerCase()==keyword.value.toLowerCase()),
    )

    return {
      keyword,
      str,
      filtered,
      table,
      tab
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
