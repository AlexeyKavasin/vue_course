<template>
  <div>
    <div>Всего пользователей: {{ usersQuantity }}</div>
    <rows-setter v-model="rowsPerPage" />

    <table class="table table-striped">
      <thead>
        <slot name="header"></slot>
      </thead>

      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <slot name="row" v-bind="user"></slot>
        </tr>
      </tbody>
    </table>

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
    usersQuantity() {
      return this.users.length
    },
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
