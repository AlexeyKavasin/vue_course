<template>
  <div>
    <h3>Добавление пользователя</h3>
    <user-form :user="user" @input="value => (user = value)"> </user-form><br />
    <button type="button" class="btn btn-primary" @click="saveNewUser">Сохранить</button>
  </div>
</template>

<script>
import axios from 'axios'

const defaultUser = {
  id: 0,
  isActive: false,
  balance: '$0.00',
  picture: 'http://placehold.it/128x128',
  birthDate: '',
  accessLevel: 'user',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: `new Date().toLocaleDateString()`
}

export default {
  name: 'AddUserPage',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: defaultUser
  }),
  computed: {
    url() {
      return `http://localhost:3004/users/`
    }
  },
  mounted() {
    this.loadForm()
  },
  methods: {
    loadForm() {
      this.user = Object.assign({}, defaultUser)
    },
    saveNewUser() {
      this.user.registered = new Date().toLocaleDateString()
      let usersListLength = axios
        .get(this.url)
        .then(response => (usersListLength = response.data.length))

      axios
        .post(this.url, this.user)
        .then(() => {
          this.$router.push(`/edit/${usersListLength}`)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
