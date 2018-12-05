<template>
  <ul class="pagination">
    <li
      class="page-item"
      v-for="item in pages"
      :key="item"
      :class="{ active: item === currentPage }"
    >
      <a href="#" class="page-link" @click.prevent="selectPage(item)"> {{ item }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paginator',
  model: {
    prop: 'currentPage'
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    // Всего строк в таблице
    totalRows: {
      type: Number,
      required: true
    },
    // Количество строк на странице
    rowsPerPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.totalRows / this.rowsPerPage)
    }
  },
  methods: {
    selectPage(page) {
      this.$emit('input', page)
    }
  }
}
</script>
