<template>
  <table class="table table-hover" id="user-table">
    <tr>
      <th>#</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Баланс</th>
      <th>Email</th>
      <th>Телефон</th>
      <th>Зарегистрирован</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>
        <router-link :to="'/edit/' + user.id"> {{ user.id }} </router-link>
      </td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.balance }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.registered }}</td>
    </tr>
    <tr>
      <td colspan="7">Всего пользователей: {{ usersQuantity }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    usersQuantity() {
      return this.users.length
    }
  }
}
</script>
