<template>
  <div>
    <h3>Список пользователей</h3>

    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UsersPage',
  components: {
    'user-list': () => import('@/components/UserList.vue')
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
