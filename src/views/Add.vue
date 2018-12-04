<template>
  <div>
    <h3>Добавление пользователя</h3>
    <user-form :user="user" @input="value => (user = value)"> </user-form><br />
    <button type="button" class="btn btn-primary" @click="saveNewUser">Сохранить</button>
  </div>
</template>

<script>
import axios from 'axios'
import UserForm from '@/components/UserForm.vue'

const defaultUser = {
  id: 0,
  isActive: false,
  balance: '$0.00',
  picture: 'http://placehold.it/128x128',
  age: 0,
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
    'user-form': UserForm
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

      axios
        .post(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
