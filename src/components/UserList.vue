<template>
  <div class="container">
    <rows-setter v-model="rowsPerPage" />
    <table class="table table-hover">
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
      <tr v-for="user in filteredUsers" :key="user.id">
        <td>
          <router-link :to="'/edit/' + user.id"> {{ user.id }} </router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </tr>
    </table>

    <div>Всего пользователей: {{ usersQuantity }}</div>

    <div>
      Выбрана страница: <b>{{ currentPage }}</b>
      <paginator v-model="currentPage" :rows-per-page="rowsPerPage" :total-rows="usersQuantity" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  components: {
    paginator: () => import('@/components/Paginator.vue'),
    'rows-setter': () => import('@/components/RowsSetter.vue')
  },
  data: () => ({
    rowsPerPage: 5,
    currentPage: 1
  }),
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    usersQuantity() {
      return this.list.length
    },
    filteredUsers() {
      const start = (this.currentPage - 1) * this.rowsPerPage
      const finish = this.currentPage * this.rowsPerPage - 1

      return this.list.filter((user, index) => {
        if (index >= start && index <= finish) return user
      })
    }
  }
}
</script>
