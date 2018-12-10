<template>
  <ul class="pagination">
    <li class="page-item" :class="{ disabled: currentPage === 1 }">
      <a href="#" class="page-link" @click.prevent="toPreviousPage"> &laquo; </a>
    </li>
    <li
      class="page-item"
      v-for="item in totalPages"
      :key="item"
      :class="{ active: item === currentPage }"
    >
      <a href="#" class="page-link" @click.prevent="selectPage(item)"> {{ item }} </a>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
      <a href="#" class="page-link" @click.prevent="toNextPage"> &raquo; </a>
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
    totalPages() {
      return Math.ceil(this.totalRows / this.rowsPerPage)
    }
  },
  methods: {
    selectPage(page) {
      this.$emit('input', page)
    },
    toPreviousPage() {
      const prevPage = this.currentPage - 1
      if (prevPage > 0) {
        this.selectPage(prevPage)
      }
    },
    toNextPage() {
      const nextPage = this.currentPage + 1
      if (nextPage <= this.totalPages) {
        this.selectPage(nextPage)
      }
    }
  }
}
</script>
