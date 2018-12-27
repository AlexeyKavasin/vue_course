<template>
  <div>
    <h3>Список пользователей</h3>

    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <smart-table v-else :users="users">
      <tr slot="header">
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
      <template slot="row" slot-scope="props">
        <td>
          <router-link :to="`/edit/${props.id}`">{{ props.id }}</router-link>
        </td>
        <td>{{ props.firstName }}</td>
        <td>{{ props.lastName }}</td>
        <td>{{ props.isActive }}</td>
        <td>{{ props.balance }}</td>
        <td>{{ props.email }}</td>
        <td>{{ props.phone }}</td>
        <td>{{ props.registered }}</td>
      </template>
    </smart-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersPage',
  components: {
    'smart-table': () => import('@/components/SmartTable.vue')
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  computed: {
    url() {
      return 'http://localhost:3004'
    }
  },
  methods: {
    loadUsers() {
      axios
        .get(`${this.url}/users`)
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
