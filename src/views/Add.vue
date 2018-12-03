<template>
  <div>
    <h3>Добавление пользователя</h3>
    <user-form :user="user"></user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

const emptyUserObj = {
  id: 0,
  isActive: false,
  balance: '',
  picture: '',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUserPage',
  components: {
    'user-form': UserForm
  },
  data: () => ({
    user: null
  }),
  created() {
    this.loadDefaultForm()
  },
  methods: {
    loadDefaultForm() {
      this.user = Object.assign({}, emptyUserObj)
    }
  }
}
</script>
