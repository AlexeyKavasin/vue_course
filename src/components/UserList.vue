<template>
  <div>
    <table class="table table-hover">
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
      <tr v-for="user in filteredList" :key="user.id">
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
    </table>

    <div>Всего пользователей: {{ usersQuantity }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    fullList: {
      type: Array,
      required: true
    },
    filteredList: {
      type: Array,
      required: true
    }
  },
  computed: {
    usersQuantity() {
      return this.fullList.length
    }
  }
}
</script>
