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
