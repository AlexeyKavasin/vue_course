<template>
  <div>
    <h3>Редактирование пользователя</h3>
    <div v-if="user === null" class="alert alert-warning">Загрузка...</div>
    <user-form v-else :user="user"></user-form>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUserPage',
  components: {
    'user-form': UserForm
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
      return this.$route.params.id
    }
  },
  methods: {
    loadUser() {
      axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.user = response.data.find(userObj => userObj.id === parseInt(this.id, 10))
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
