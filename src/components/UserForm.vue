<template>
  <ul class="list-group">
    <li class="list-group-item">
      <label>Имя</label> <input type="text" class="form-control" v-model="localUser.firstName" />
    </li>
    <li class="list-group-item">
      <label>Фамилия</label> <input type="text" class="form-control" v-model="localUser.lastName" />
    </li>
    <li class="list-group-item">
      <label>Email</label> <input type="text" class="form-control" v-model="localUser.email" />
    </li>
    <li class="list-group-item">
      <label>Телефон</label> <input type="text" class="form-control" v-model="localUser.phone" />
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
    localUser: null
  }),
  created() {
    this.localUser = Object.assign({}, this.user)
  },
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('userEdited', this.localUser)
      }
    }
  }
}
</script>
