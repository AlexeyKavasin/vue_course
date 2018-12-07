<template>
  <ul class="list-group">
    <li class="list-group-item">
      <label>Имя</label> <input type="text" class="form-control" v-model="localUser.firstName" />
    </li>
    <li class="list-group-item">
      <label>Фамилия</label> <input type="text" class="form-control" v-model="localUser.lastName" />
    </li>
    <li class="list-group-item" v-if="!$route.params.id">
      <label>Возраст</label> <input type="number" class="form-control" v-model="localUser.age" />
    </li>
    <li class="list-group-item">
      <label>Email</label> <input type="email" class="form-control" v-model="localUser.email" />
    </li>
    <li class="list-group-item">
      <label>Телефон</label> <input type="text" class="form-control" v-model="localUser.phone" />
    </li>
    <li class="list-group-item">
      <label>Адрес</label> <input type="text" class="form-control" v-model="localUser.address" />
    </li>
    <li class="list-group-item">
      <label>Компания</label> <input type="text" class="form-control" v-model="localUser.company" />
    </li>
    <li class="list-group-item">
      <label>О себе</label> <textarea class="form-control" v-model="localUser.about"></textarea>
    </li>
    <li class="list-group-item" v-if="!$route.params.id">
      <label>Активен</label>
      <input type="checkbox" class="form-control" v-model="localUser.isActive" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user'
  },
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
  methods: {
    update() {
      this.$emit('input', Object.assign({}, this.localUser))
    }
  },
  watch: {
    localUser: {
      deep: true,
      handler: 'update'
    }
  }
}
</script>
