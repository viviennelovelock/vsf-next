<template>
  <div>
    <div v-for="(column, i) in columns" :key="i" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Grid',
  props: {
    columns: {},
  },
})
</script>
