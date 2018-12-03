<template>
  <ul class="list-group">
    <li class="list-group-item">
      <label>Имя</label> <input type="text" class="form-control" v-model="user.firstName" />
    </li>
    <li class="list-group-item">
      <label>Фамилия</label> <input type="text" class="form-control" v-model="user.lastName" />
    </li>
    <li class="list-group-item">
      <label>Email</label> <input type="text" class="form-control" v-model="user.email" />
    </li>
    <li class="list-group-item">
      <label>Телефон</label> <input type="text" class="form-control" v-model="user.phone" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    editedUser: null
  }),
  mounted() {
    this.editedUser = Object.assign({}, this.user)
  },
  watch: {
    editedUser: {
      deep: true,
      handler() {
        this.$emit('userEdited', this.editedUser)
      }
    }
  }
}
</script>
