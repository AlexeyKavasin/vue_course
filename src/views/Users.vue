<template>
  <div>
    <h3>Список пользователей</h3>

    <div v-if="!users.length" class="alert alert-warning">Загрузка...</div>
    <user-list v-else :users="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersPage',
  components: {
    'user-list': UserList
  },
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
