<template>
  <select @input="setRowsAmount($event.target.value)">
    <option v-for="option in rowsList" :key="option" :value="option" :selected="option === rows">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'RowsSetter',
  data: () => ({
    rowsList: [3, 5, 10]
  }),
  model: {
    prop: 'rows'
  },
  props: {
    rows: {
      type: Number,
      required: true
    }
  },
  methods: {
    setRowsAmount(value) {
      this.$emit('input', parseInt(value, 10))
    }
  }
}
</script>
