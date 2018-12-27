<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ greeting }}</h1>
    <router-link to="/users">Посмотреть список пользователей</router-link>
    <br />
    <router-link to="/add">Добавить пользователя</router-link>
    <br /><br />
    <ul class="list-group">
      <li class="list-group-item">
        <label>
          А это поле, связанное с Vuex.<br />
          Можно изменить приветствие:
        </label>
        <input type="text" v-model="vuexbind" class="form-control" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    greeting() {
      return this.$store.state.greeting
    },
    vuexbind: {
      get() {
        return this.$store.state.greeting
      },
      set(val) {
        this.$store.commit('changeGreeting', val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 32px;
  margin: 40px 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.list-group {
  max-width: 400px;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
</style>
