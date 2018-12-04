<template>
  <ul class="pagination">
    <li v-for="page in pages" :key="page">
      <a href="#" @click.prevent="selectPage(page)"> {{ page }} </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paginator',
  props: {
    page: {
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
