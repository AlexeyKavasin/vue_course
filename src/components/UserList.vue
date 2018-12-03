<template>
  <table class="table table-hover" id="user-table">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Balance</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Registered</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.balance }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.registered }}</td>
    </tr>
    <tr>
      <td colspan="6">Всего пользователей: {{ usersQuantity }}</td>
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
