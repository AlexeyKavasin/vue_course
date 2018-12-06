<template>
  <div>
    <h3>Список пользователей</h3>

    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <smart-table v-else :users="users"></smart-table>
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
