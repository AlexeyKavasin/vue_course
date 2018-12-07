<template>
  <div>
    <rows-setter v-model="rowsPerPage" /><br /><br />

    <div><user-list :fullList="users" :filteredList="filteredUsers"> </user-list></div>

    <div>
      Выбрана страница: <b>{{ currentPage }}</b>
      <paginator v-model="currentPage" :rows-per-page="rowsPerPage" :total-rows="users.length" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartTable',
  components: {
    'user-list': () => import('@/components/UserList.vue'),
    'rows-setter': () => import('@/components/RowsSetter.vue'),
    paginator: () => import('@/components/Paginator.vue')
  },
  data: () => ({
    rowsPerPage: 5,
    currentPage: 1
  }),
  props: {
    users: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    filteredUsers() {
      const start = (this.currentPage - 1) * this.rowsPerPage
      const finish = this.currentPage * this.rowsPerPage - 1

      return this.users.filter((user, index) => {
        if (index >= start && index <= finish) return user
      })
    }
  }
}
</script>
