<template>
  <div id="demo">
    <!-- <form id="search">
        Search <input name="query" v-model="searchQuery">
    </form> -->
    <SelectableTable :fields="fields" :rows="rows" :mulSelect="mulSelect" />
  </div>
</template>

<script>
import SelectableTable from '@/components/SelectableTable'

export default {
  name: 'Demo',
  data () {
    return {
      fields: [{ name: '姓名' }, { name: '年龄' }, { name: '性别' }],
      rows: [
        { 姓名: '张三', 年龄: 11, 性别: '男' },
        { 姓名: '李四', 年龄: 2, 性别: '女' },
        { 姓名: '王五', 年龄: 13, 性别: '-' }
      ],
      mulSelect: [false, false, false]
    }
  },
  components: {
    SelectableTable
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
