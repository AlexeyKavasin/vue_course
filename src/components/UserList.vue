<template>
    <table class="table table-hover" id="user-table">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
			<th>Phone</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
			<td>{{ user.phone }}</td>
        </tr>
        <tr>
            <td colspan="4">Всего пользователей: {{ usersQuantity }}</td>
		</tr>
    </table>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true,
            default: []
        }
    },
    computed: {
        usersQuantity() {
            return this.users.length;
        }
    },
    methods: {
        selectUser(userId) {
            this.$emit('userselected', userId);
        }
    }
}
</script>
