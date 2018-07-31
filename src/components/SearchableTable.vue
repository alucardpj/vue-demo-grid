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
    var data = this.gridData
    this.$http.get('static/data.json').then(response => {
      console.log('数据加载成功')
      data = JSON.parse(response.data)
      console.log(data)
      // self.tableContent.push(response.body);
    }, response => {
      console.log('数据加载失败')
    })
    return {
      searchQuery: '',
      gridColumns: ['name', 'mobile'],
      gridData: data
      // [
      //   { name: 'Chuck Norris', power: Infinity },
      //   { name: 'Bruce Lee', power: 9000 },
      //   { name: 'Jackie Chan', power: 7000 },
      //   { name: 'Jet Li', power: 8000 }
      // ]
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
