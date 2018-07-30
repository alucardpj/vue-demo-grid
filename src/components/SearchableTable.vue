<template>
    <div id="demo">
    <form id="search">
        Search <input name="query" v-model="searchQuery">
    </form>
    <DemoGrid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
    </DemoGrid>
    </div>
</template>

<script>
import DemoGrid from './DemoGrid'

export default {
  name: 'SearchableTable',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  },
  components: {
    DemoGrid
  }
}
</script>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
