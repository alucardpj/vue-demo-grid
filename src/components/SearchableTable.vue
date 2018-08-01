<template>
  <div id="demo">
    <form id="search">
        查找 <input name="query" v-model="searchQuery">
    </form>
    <DemoGrid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        ref="grid">
    </DemoGrid>
    <button @click="printMobile()">导出</button>
  </div>
</template>

<script>
import DemoGrid from './DemoGrid'
import axios from 'axios'

export default {
  name: 'SearchableTable',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'mobile'],
      gridData: []
    }
  },
  mounted () {
    axios
      .get('static/data.json')
      .then(response => {
        this.gridData = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    printMobile () {
      // debugger
      console.log(this.$refs.grid.activeMobile)
    }
  },
  components: {
    DemoGrid
  }
}
</script>

<style>
button {
  height: 50px;
  width: 100px;
}
</style>
