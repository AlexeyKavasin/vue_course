<template>
  <div>
    <h3>Редактирование пользователя</h3>
    <div v-if="user === null" class="alert alert-warning">Загрузка...</div>
    <user-form v-else :user="user" @input="value => (user = value)"> </user-form><br />

    <button type="button" class="btn btn-primary" @click="saveUser">Сохранить</button><br /><br />
    <button type="button" class="btn btn-secondary" @click="deleteUser">
      Удалить пользователя
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditUserPage',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => {
    return {
      user: null
    }
  },
  mounted() {
    this.loadUser()
  },
  computed: {
    id() {
      return Number(this.$route.params.id)
    },
    url() {
      return `http://localhost:3004/users/${this.id}`
    }
  },
  methods: {
    loadUser() {
      axios
        .get(`${this.url}`)
        .then(response => {
          this.user = response.data
        })
        .catch(error => console.error(error))
    },
    saveUser() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    deleteUser() {
      axios
        .delete(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
